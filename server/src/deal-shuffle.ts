import { Card, defaultCards } from "./cards"


export function shuffle(cards: Card[]) {
    if (cards.length === 0) cards = defaultCards
    const randomNumber = Math.floor(Math.random() * cards.length)
    const raffledCard = cards[randomNumber]
    const updatedCards = cards.filter(card => card.id !== raffledCard.id)
    cards = updatedCards
    return { raffledCard, cards }
    // const keys = Object.keys(cards)
    // const suit = keys[keys.length * Math.random() << 0] as Suit
    // const number = cards[suit][Math.floor(Math.random() * cards[suit].length)]
    // const updatedSuitCards = cards[suit].filter((card: Number) => card !== number)
    // cards[suit] = updatedSuitCards
    // return { suit, number, cards }

}

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