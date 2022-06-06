const defaultCards = [
    {
        id: 1,
        number: 1,
        suit: "clubs",
        suitPower: 1,
        cardPower: 3,
        isJoker: true,
        image_url: "http://localhost:3333/assets/clubs/1.png"
    },
    {
        id: 7,
        number: 7,
        suit: "clubs",
        suitPower: 1,
        cardPower: 7,
        isJoker: false,
        image_url: "http://localhost:3333/assets/clubs/7.png"
    },
    {
        id: 10,
        number: 12,
        suit: "clubs",
        suitPower: 1,
        cardPower: 4,
        isJoker: false,
        image_url: "http://localhost:3333/assets/clubs/12.png"
    },
    {
        id: 11,
        number: 1,
        suit: "hearts",
        suitPower: 2,
        cardPower: 3,
        isJoker: true,
        image_url: "http://localhost:3333/assets/hearts/1.png"
    },
    {
        id: 12,
        number: 2,
        suit: "hearts",
        suitPower: 2,
        cardPower: 2,
        isJoker: false,
        image_url: "http://localhost:3333/assets/hearts/2.png"
    },
    {
        id: 13,
        number: 3,
        suit: "hearts",
        suitPower: 2,
        cardPower: 1,
        isJoker: false,
        image_url: "http://localhost:3333/assets/hearts/3.png"
    },
    {
        id: 21,
        number: 1,
        suit: "spades",
        suitPower: 3,
        cardPower: 3,
        isJoker: true,
        image_url: "http://localhost:3333/assets/spades/1.png"
    },
    {
        id: 22,
        number: 2,
        suit: "spades",
        suitPower: 3,
        cardPower: 2,
        isJoker: false,
        image_url: "http://localhost:3333/assets/spades/2.png"
    },
    {
        id: 23,
        number: 3,
        suit: "spades",
        suitPower: 3,
        cardPower: 1,
        isJoker: false,
        image_url: "http://localhost:3333/assets/spades/3.png"
    },
    {
        id: 24,
        number: 4,
        suit: "spades",
        suitPower: 3,
        cardPower: 10,
        isJoker: false,
        image_url: "http://localhost:3333/assets/spades/4.png"
    },
    {
        id: 25,
        number: 5,
        suit: "spades",
        suitPower: 3,
        cardPower: 9,
        isJoker: false,
        image_url: "http://localhost:3333/assets/spades/5.png"
    },
    {
        id: 26,
        number: 6,
        suit: "spades",
        suitPower: 3,
        cardPower: 8,
        isJoker: false,
        image_url: "http://localhost:3333/assets/spades/6.png"
    },    
    {
        id: 33,
        number: 3,
        suit: "diamonds",
        suitPower: 4,
        cardPower: 1,
        isJoker: false,
        image_url: "http://localhost:3333/assets/diamonds/3.png"
    },
    {
        id: 34,
        number: 4,
        suit: "diamonds",
        suitPower: 4,
        cardPower: 10,
        isJoker: false,
        image_url: "http://localhost:3333/assets/diamonds/4.png"
    },
    {
        id: 35,
        number: 5,
        suit: "diamonds",
        suitPower: 4,
        cardPower: 9,
        isJoker: false,
        image_url: "http://localhost:3333/assets/diamonds/5.png"
    },
    {
        id: 36,
        number: 6,
        suit: "diamonds",
        suitPower: 4,
        cardPower: 8,
        isJoker: false,
        image_url: "http://localhost:3333/assets/diamonds/6.png"
    },
    {
        id: 40,
        number: 12,
        suit: "diamonds",
        suitPower: 4,
        cardPower: 4,
        isJoker: false,
        image_url: "http://localhost:3333/assets/diamonds/12.png"
    },
]

defaultCards.sort((a, b) => {
    return a.isJoker < b.isJoker ? 1 : -1 
    && a.cardPower > b.cardPower ? 1 : -1 
    // || a.suitPower > b.suitPower ? 1 : -1
})

console.log(defaultCards)