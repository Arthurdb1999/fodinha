import { io } from './http'
import { shuffle } from './deal-shuffle'
import { Card } from './cards';

interface User {
    socket_id: string;
    username: string;
    lifes: number;
    cards: Card[];
    isHost: boolean;
}

interface Message {
    text: string;
    createdAt: Date;
    username: string;
}

const users: User[] = []
const messages: Message[] = []
let playingOrder: User[] = []
let joker: Card
let cardsStack: Card[] = []

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

    socket.on("START_GAME", () => {
        const shift = 10
        let nextCards: Card[] = []
        playingOrder = users.sort(() => Math.random() - 0.5)
        const { raffledCard, cards } = shuffle(nextCards)
        joker = raffledCard
        cards.map(card => {
            if (card.cardPower === joker.cardPower + 1) {
                card.isJoker = true
                return card
            }
            return card
        })
        nextCards = cards
        users.forEach(user => {
            for (let i = 0; i < shift; i++) {
                const { raffledCard, cards } = shuffle(nextCards)
                user.cards.push(raffledCard)
                nextCards = cards
            }
            io.to(user.socket_id).emit('YOUR_CARDS', { cards: user.cards, playingOrder, joker })
        })
    })

    //TODO -> evento para distribuir as cartas nas outras rodadas
    // socket.on("NEXT_TURN", turn => {})

    socket.on("PLAY_CARD", (card: Card) => {
        console.log(card)
        if (cardsStack.length === 0) {
            cardsStack.push(card)
        }

        // cardsStack = []
        for (let i = 0; i < cardsStack.length; i++) {
            if (card.isJoker && !cardsStack[i].isJoker) {
                
            }
        }
        io.emit("PLAYED_CARD", card)
    })

})