import { io } from './http'
import { shuffle } from './deal-shuffle'
import { Cards } from './cards';

interface User {
    socket_id: string;
    username: string;
    lifes: number;
    cards: Cards[];
    isHost: boolean;
}

interface Message {
    text: string;
    createdAt: Date;
    username: string;
}

const users: User[] = []
const messages: Message[] = []

io.on("connection", socket => {
    socket.on("ENTER_ROOM", data => {
        console.log("Client Connected")

        let isHost = false
        if (users.length === 0) {
            isHost = true
        }

        let user
        const userInRoom = users.find(user => user.username === data.username)

        if (userInRoom) {
            userInRoom.socket_id = socket.id
            user = userInRoom
        } else {
            user = {
                username: data.username,
                socket_id: socket.id,
                lifes: 2,
                isHost: isHost,
                cards: []
            }
            users.push(user)
        }
        socket.emit("NEW_USER", { user })
    })

    socket.on("DEAL_CARDS", () => {
        const shift = 10
        let nextCards: Cards[] = []
        users.forEach(user => {
            for (let i = 0; i < shift; i++) {
                const { raffledCard, cards } = shuffle(nextCards)
                user.cards.push(raffledCard)
                nextCards = cards
            }
            console.log(user)
            io.to(user.socket_id).emit('YOUR_CARDS', { cards: user.cards })
        })
    })

})