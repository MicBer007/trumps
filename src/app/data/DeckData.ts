import { Card } from "../model/Card";
import { Deck } from "../model/Deck";

export class DeckData {

  deck:Deck;

  cards:Card[] = [];

  ranks:string[] = ['Ace', 'King', 'Queen', 'Jack', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

  suites:string[] = ['♠', '♦', '♥', '♣'];

  get getCards() {
    return this.cards;
  }

  constructor() {
    
   
  }

  createDeck(): Deck {
    
    const newDeck:Deck = new Deck();

    for (let i = 0; i < this.suites.length; i++) {

      for (let j = 0; j < this.ranks.length; j++) {

        this.cards.push(new Card(this.suites[i], this.ranks[j]));
        
      }

    }

    newDeck.cardsInDeck = this.cards;

    return newDeck;

  }

}