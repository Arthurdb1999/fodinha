import React, { ReactNode, useState } from 'react';
import { io } from 'socket.io-client';
import { socket } from '../services/api'
import styles from './styles.module.scss'

export interface Card {
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
    cards: Card[];
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
    const [currentCard, setCurrentCard] = useState<Card>()
    const [isStartButtonVisible, setIsStartButtonVisible] = useState(true)
    const [canPlay, setCanPlay] = useState(true)

    socket.on("YOUR_CARDS", (data: { cards: Card[] }) => {
        setConnectedUser({
            ...connectedUser,
            cards: data.cards
        })
    })

    socket.on("PLAYED_CARD", (card: Card) => {
        setCurrentCard(card)
    })

    socket.on("MY_TURN", () => {
        setCanPlay(true)
    })

    function startGame() {
        socket.emit("START_GAME")
        setIsStartButtonVisible(false)
    }

    function playCard(card: Card) {
        socket.emit("PLAY_CARD", card)
        setCanPlay(false)
    }

    return (
        <div className={styles.Play}>
            <div className={styles.Header}>
                usuário:{connectedUser.username}
                {(connectedUser.isHost && isStartButtonVisible) && <button onClick={startGame}>Começar jogo</button>}
            </div>
            <div className={styles.Table}>
                {currentCard && <img src={currentCard.image_url} alt={currentCard.number + "of" + currentCard.suit} />}
            </div>
            <div className={styles.MyHand}>
                {connectedUser.cards
                    .sort((a, b) => {
                        return a.id > b.id ? 1 : -1
                    })
                    .map(card => (
                        <button
                            onClick={() => playCard(card)}
                            disabled={canPlay}
                            key={card.id}
                        >
                            <img src={card.image_url} alt={card.number + "of" + card.suit} />
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default Play;