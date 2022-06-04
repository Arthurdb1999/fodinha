import React, { ReactNode, useState } from 'react';
import { socket } from './url'

export interface Cards {
    id: number
    number: number
    suit: Suit
    image_url: string
}

export type Suit = 'clubs' | 'hearts' | 'spades' | 'diamonds'

export interface User {
    socket_id: string;
    username: string;
    lifes: number;
    cards: Cards[];
    isHost: boolean;
}

interface PlayProps {
    history: {
        location: {
            state: {
                user: User
            }
        }
    },
    children?: ReactNode
}

function Play(props: PlayProps) {

    const user = props.history.location.state.user

    const [connectedUser, setConnectedUser] = useState<User>(user)
    const [isStartButtonVisible, setIsStartButtonVisible] = useState(true)

    socket.on("YOUR_CARDS", (data: { cards: Cards[] }) => {
        setConnectedUser({
            ...connectedUser,
            cards: data.cards
        })
    })

    function startGame() {
        socket.emit("DEAL_CARDS")
        setIsStartButtonVisible(false)
    }

    return (
        <div className='Play'>
            usuário:{connectedUser.username}
            {(connectedUser.isHost && isStartButtonVisible) && <button onClick={startGame}>Começar jogo</button>}
            <div className='Table'></div>
            <div className="MyHand">
                {connectedUser.cards
                    .sort((a, b) => {
                        return a.id > b.id ? 1 : -1
                    })
                    .map(card => (
                        <img key={card.id} src={card.image_url} alt={card.number + "of" + card.suit} />
                    ))
                }
            </div>
        </div>
    )
}

export default Play;