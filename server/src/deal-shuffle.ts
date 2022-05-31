interface Cards {
    clubs: Number[],
    hearts: Number[],
    spades: Number[],
    diamonds: Number[]
}

type Suit = 'clubs'|'hearts'|'spades'|'diamonds'


let defaultCards: Cards = {
    clubs: [1, 2, 3, 4, 5, 6, 7, 10, 11, 12],
    hearts: [1, 2, 3, 4, 5, 6, 7, 10, 11, 12],
    spades: [1, 2, 3, 4, 5, 6, 7, 10, 11, 12],
    diamonds: [1, 2, 3, 4, 5, 6, 7, 10, 11, 12]
}

export function shuffle(cards: Cards = defaultCards) {
    const keys = Object.keys(cards)
    const suit = keys[keys.length * Math.random() << 0] as Suit
    const number = cards[suit][Math.floor(Math.random() * cards[suit].length)]
    const updatedSuitCards = cards[suit].filter((card: Number) => card !== number)
    cards[suit] = updatedSuitCards
    return { suit, number, cards }
}

interface Player {
    name: string;
    cards: any
}

let players: Player[] = [
    {
        name:'Arthur',
        cards: {
            clubs: [],
            hearts: [],
            spades: [],
            diamonds: [],
        }
    },
    {
        name:'Douglas',
        cards: {
            clubs: [],
            hearts: [],
            spades: [],
            diamonds: [],
        }
    },
    {
        name:'Eduardo',
        cards: {
            clubs: [],
            hearts: [],
            spades: [],
            diamonds: [],
        }
    },
]

// let shift = 2

// for (let i = 0; i < shift; i++) {
//     for (let j = 0; j < players.length; j++) {
//         let { suit, number, cards: newcards} = shuffle(cards)
//         players[j].cards[suit].push(number)
//         cards = newcards
//     }
// }
// const joker = shuffle(cards)
// console.log(joker.suit, joker.number)
// for (let i = 0; i < players.length; i++) {
//     console.log(players[i].name, players[i].cards)    
// }