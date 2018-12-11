import { Card } from "./card";

export class Deck {

    cards: Card[];

    constructor(){
        
    }

    suffle(): Deck {

        let j;
        let temp;

        let deck: Deck = this;
        
        for (let i = 0; i < deck.cards.length; i++) {
    
            j = Math.floor(Math.random() * deck.cards.length)
            temp = deck.cards[i];
            deck.cards[i] = deck.cards[j];
            deck.cards[j] = temp;
          
        }

        return deck;
    }

}