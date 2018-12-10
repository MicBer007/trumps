import { Card } from "./card";

export class Deck {

    cards: Card[];

    constructor(){
        
    }

    suffle(): void {
        let j;
        let temp;
        for (let i = 0; i < this.cards.length; i++) {
    
          j = Math.random() * i + 1;
          temp = this.cards[i];
          this.cards[i] = this.cards[j];
          this.cards[j] = temp;
          
        }
    }

}