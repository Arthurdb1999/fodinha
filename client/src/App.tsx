import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client'

interface Cards {
  clubs: Number[],
  hearts: Number[],
  spades: Number[],
  diamonds: Number[]
}

function App() {

  const socket = io("http://localhost:3333")

  const [username, setUsername] = useState('')
  const [logged, setLogged] = useState(false)

  useEffect(() => {

  }, [])

  function enterGame() {
    socket.emit("enter", {
      username
    }, (cards: Cards) => {
      console.log(cards)
    })

    setLogged(true)
  }

  return (
    <div className="App">
      {!logged
        ? (
          <>
            <label htmlFor="username">Digite seu nome de usuário</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={e => setUsername(e.target.value)}
            />

            <button
              onClick={() => enterGame()}>
              Entrar
            </button>
          </>
        ) : (
          <div>
            <div className='myCards'>
              <div className='card'>
                <span>2 de espadas</span>
              </div>
            </div>
          </div>
        )}

    </div>
  );
}

export default App;
