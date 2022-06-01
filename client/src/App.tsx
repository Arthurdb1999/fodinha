import React, { useState } from 'react';
import { socket } from './url'
import { useHistory } from 'react-router-dom'

interface Cards {
  clubs: Number[],
  hearts: Number[],
  spades: Number[],
  diamonds: Number[]
}

function App() {

  const history = useHistory()

  const [username, setUsername] = useState('')

  function enterGame() {
    socket.emit("ENTER_ROOM", {
      username
    })
  
    history.push({
      pathname: '/play',
      state: { username }
    })
  }

  return (
    <div className="App">
      <label htmlFor="username">Digite seu nome de usuário</label>
      <input
        type="text"
        id="username"
        name="username"
        onChange={e => setUsername(e.target.value)}
      />

      <button
        onClick={enterGame}>
        Entrar
      </button>
    </div>
  );
}

export default App;
