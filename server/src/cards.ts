export interface Card {
    id: number;
    number: number;
    suit: Suit;
    suitPower: number;
    cardPower: number;
    isJoker: boolean
    image_url: string;
}

export type Suit = 'clubs' | 'hearts' | 'spades' | 'diamonds'

export const defaultCards: Card[] = [
    {
        id: 1,
        number: 1,
        suit: "clubs",
        suitPower: 1,
        cardPower: 3,
        isJoker: false,
        image_url: "http://localhost:3333/assets/clubs/1.png"
    },
    {
        id: 2,
        number: 2,
        suit: "clubs",
        suitPower: 1,
        cardPower: 2,
        isJoker: false,
        image_url: "http://localhost:3333/assets/clubs/2.png"
    },
    {
        id: 3,
        number: 3,
        suit: "clubs",
        suitPower: 1,
        cardPower: 1,
        isJoker: false,
        image_url: "http://localhost:3333/assets/clubs/3.png"
    },
    {
        id: 4,
        number: 4,
        suit: "clubs",
        suitPower: 1,
        cardPower: 10,
        isJoker: false,
        image_url: "http://localhost:3333/assets/clubs/4.png"
    },
    {
        id: 5,
        number: 5,
        suit: "clubs",
        suitPower: 1,
        cardPower: 9,
        isJoker: false,
        image_url: "http://localhost:3333/assets/clubs/5.png"
    },
    {
        id: 6,
        number: 6,
        suit: "clubs",
        suitPower: 1,
        cardPower: 8,
        isJoker: false,
        image_url: "http://localhost:3333/assets/clubs/6.png"
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
        id: 8,
        number: 10,
        suit: "clubs",
        suitPower: 1,
        cardPower: 6,
        isJoker: false,
        image_url: "http://localhost:3333/assets/clubs/10.png"
    },
    {
        id: 9,
        number: 11,
        suit: "clubs",
        suitPower: 1,
        cardPower: 5,
        isJoker: false,
        image_url: "http://localhost:3333/assets/clubs/11.png"
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
        isJoker: false,
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
        id: 14,
        number: 4,
        suit: "hearts",
        suitPower: 2,
        cardPower: 10,
        isJoker: false,
        image_url: "http://localhost:3333/assets/hearts/4.png"
    },
    {
        id: 15,
        number: 5,
        suit: "hearts",
        suitPower: 2,
        cardPower: 9,
        isJoker: false,
        image_url: "http://localhost:3333/assets/hearts/5.png"
    },
    {
        id: 16,
        number: 6,
        suit: "hearts",
        suitPower: 2,
        cardPower: 8,
        isJoker: false,
        image_url: "http://localhost:3333/assets/hearts/6.png"
    },
    {
        id: 17,
        number: 7,
        suit: "hearts",
        suitPower: 2,
        cardPower: 7,
        isJoker: false,
        image_url: "http://localhost:3333/assets/hearts/7.png"
    },
    {
        id: 18,
        number: 10,
        suit: "hearts",
        suitPower: 2,
        cardPower: 6,
        isJoker: false,
        image_url: "http://localhost:3333/assets/hearts/10.png"
    },
    {
        id: 19,
        number: 11,
        suit: "hearts",
        suitPower: 2,
        cardPower: 5,
        isJoker: false,
        image_url: "http://localhost:3333/assets/hearts/11.png"
    },
    {
        id: 20,
        number: 12,
        suit: "hearts",
        suitPower: 2,
        cardPower: 4,
        isJoker: false,
        image_url: "http://localhost:3333/assets/hearts/12.png"
    },
    {
        id: 21,
        number: 1,
        suit: "spades",
        suitPower: 3,
        cardPower: 3,
        isJoker: false,
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
        id: 27,
        number: 7,
        suit: "spades",
        suitPower: 3,
        cardPower: 7,
        isJoker: false,
        image_url: "http://localhost:3333/assets/spades/7.png"
    },
    {
        id: 28,
        number: 10,
        suit: "spades",
        suitPower: 3,
        cardPower: 6,
        isJoker: false,
        image_url: "http://localhost:3333/assets/spades/10.png"
    },
    {
        id: 29,
        number: 11,
        suit: "spades",
        suitPower: 3,
        cardPower: 5,
        isJoker: false,
        image_url: "http://localhost:3333/assets/spades/11.png"
    },
    {
        id: 30,
        number: 12,
        suit: "spades",
        suitPower: 3,
        cardPower: 4,
        isJoker: false,
        image_url: "http://localhost:3333/assets/spades/12.png"
    },
    {
        id: 31,
        number: 1,
        suit: "diamonds",
        suitPower: 4,
        cardPower: 3,
        isJoker: false,
        image_url: "http://localhost:3333/assets/diamonds/1.png"
    },
    {
        id: 32,
        number: 2,
        suit: "diamonds",
        suitPower: 4,
        cardPower: 2,
        isJoker: false,
        image_url: "http://localhost:3333/assets/diamonds/2.png"
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
        id: 37,
        number: 7,
        suit: "diamonds",
        suitPower: 4,
        cardPower: 7,
        isJoker: false,
        image_url: "http://localhost:3333/assets/diamonds/7.png"
    },
    {
        id: 38,
        number: 10,
        suit: "diamonds",
        suitPower: 4,
        cardPower: 6,
        isJoker: false,
        image_url: "http://localhost:3333/assets/diamonds/10.png"
    },
    {
        id: 39,
        number: 11,
        suit: "diamonds",
        suitPower: 4,
        cardPower: 5,
        isJoker: false,
        image_url: "http://localhost:3333/assets/diamonds/11.png"
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