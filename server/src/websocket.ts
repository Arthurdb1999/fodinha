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


    socket.on("enter", (data, callback) => {
        const userInRoom = users.find(user => user.username === data.username)

        if (userInRoom) {
            userInRoom.socket_id = socket.id
        } else {
            users.push({
                username: data.username,
                socket_id: socket.id
            })

            // TODO -> deal cards to the connected user
            const { suit, number, cards } = shuffle()
            const card = { suit, number }
            callback(card)
        }
    })
})

