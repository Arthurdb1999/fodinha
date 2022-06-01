import { io } from './http'
import { shuffle } from './deal-shuffle'

interface User {
    socket_id: string;
    username: string;
}

interface Message {
    text: string;
    createdAt: Date;
    username: string;
}

const users: User[] = []
const messages: Message[] = []

io.on("connection", socket => {
    // socket.on("select_room", (data, callback) => {

    //     socket.join(data.room)

    //     const userInRoom = users.find(user => user.username === data.username && user.room === data.room)

    //     if (userInRoom) {
    //         userInRoom.socket_id = socket.id
    //     } else {
    //         users.push({
    //             room: data.room,
    //             username: data.username,
    //             socket_id: socket.id
    //         })
    //     }

    //     const messagesRoom = getMessagesRoom(data.room)
    //     callback(messagesRoom)
    // })

    // socket.on("message", data => {
    //     const message: Message = {
    //         username: data.username,
    //         text: data.message,
    //         createdAt: new Date()
    //     }

    //     messages.push(message)

    //     io.to(data.room).emit("message", message)
    // })

    socket.on("ENTER_ROOM", data => {
        console.log(users)
        if (users.length === 0) {
            socket.emit("IS_HOST", true)
        }

        const userInRoom = users.find(user => user.username === data.username)

        if (userInRoom) {
            userInRoom.socket_id = socket.id
        } else {
            users.push({
                username: data.username,
                socket_id: socket.id
            })
        }
    })

    socket.on("DEAL_CARDS", () => {
        // io.sockets.allSockets().then()
        users.forEach(user => )
    })

})