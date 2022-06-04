import { io, serverHttp } from "./http"
import './websocket'

serverHttp.listen(3333, () => {
    io.sockets.allSockets().then(data => {
        console.log('Server is running on port 3333!' + "\n" + "Connected Clients: " + data.size)
    })
})