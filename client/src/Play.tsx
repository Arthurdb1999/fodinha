import React, { ReactNode, useState } from 'react';
import { socket } from './url'

interface PlayProps {
    history?: {
        location: {
            state: {
                username: string
            }
        }
    },
    children?: ReactNode
}

function Play(props: PlayProps) {

    const username = props.history?.location.state.username

    const [isHost, setIsHost] = useState(false)

    socket.on("IS_HOST", data => {
        if (data === true) {
            setIsHost(true)
        }
    })

    function startGame() {
        socket.emit("DEAL_CARDS")
    }

    return (
        <div className='Play'>
            usuário:{username}
            {isHost && <button onClick={startGame}>Começar jogo</button>}
        </div>
    )
}

export default Play;