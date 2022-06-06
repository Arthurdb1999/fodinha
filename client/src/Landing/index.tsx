import React, { useState } from 'react';
import { socket } from '../services/api'
import { useHistory } from 'react-router-dom'
import { User } from '../Play';
import '../global.scss'

function App() {

  const history = useHistory()

  const [username, setUsername] = useState('')

  socket.on("NEW_USER", (data: { user: User }) => {
    history.push({
      pathname: '/play',
      state: { user: data.user }
    })
  })

  function enterGame() {
    socket.emit("ENTER_ROOM", {
      username
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
