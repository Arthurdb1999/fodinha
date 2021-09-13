interface Cards {
    paus: Number[],
    copas: Number[],
    espadas: Number[],
    ouro: Number[]
}

let cards: Cards = {
    paus: [1, 2, 3, 4, 5, 6, 7, 10, 11, 12],
    copas: [1, 2, 3, 4, 5, 6, 7, 10, 11, 12],
    espadas: [1, 2, 3, 4, 5, 6, 7, 10, 11, 12],
    ouro: [1, 2, 3, 4, 5, 6, 7, 10, 11, 12]
}

function shuffle(cards: any) {
    const keys = Object.keys(cards)
    const naipe = keys[keys.length * Math.random() << 0]
    const number = cards[naipe][Math.floor(Math.random() * cards[naipe].length)]
    const updatedNaipeCards = cards[naipe].filter((card: Number) => card !== number)
    cards[naipe] = updatedNaipeCards
    return { naipe, number, cards }
}

interface Player {
    name: string;
    cards: any
}

let players: Player[] = [
    {
        name:'Arthur',
        cards: {
            paus: [],
            copas: [],
            espadas: [],
            ouro: [],
        }
    },
    {
        name:'Douglas',
        cards: {
            paus: [],
            copas: [],
            espadas: [],
            ouro: [],
        }
    },
    {
        name:'Eduardo',
        cards: {
            paus: [],
            copas: [],
            espadas: [],
            ouro: [],
        }
    },
]

let shift = 2

for (let i = 0; i < shift; i++) {
    for (let j = 0; j < players.length; j++) {
        let { naipe, number, cards: newcards} = shuffle(cards)
        players[j].cards[naipe].push(number)
        cards = newcards
    }
}
const joker = shuffle(cards)
console.log(joker.naipe, joker.number)
for (let i = 0; i < players.length; i++) {
    console.log(players[i].name, players[i].cards)    
}