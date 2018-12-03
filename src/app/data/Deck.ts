import { Card, CardData } from "../model/card";

export class Deck {

  cards:Card[] = new Card[52];

  ranks:string[] = new string[13];

  suits:string[] = new string[4];

  constructor() {

    this.ranks[0] = "Ace";
    this.ranks[1] = "King";
    this.ranks[2] = "Queen";
    this.ranks[3] = "Jack";
    this.ranks[4] = "10";
    this.ranks[5] = "9";
    this.ranks[6] = "8";
    this.ranks[7] = "7";
    this.ranks[8] = "6";
    this.ranks[9] = "5";
    this.ranks[10] = "4";
    this.ranks[11] = "3";
    this.ranks[12] = "2";

    this.suits[0] = "Spades";
    this.suits[1] = "Hearts";
    this.suits[2] = "Diamonds";
    this.suits[3] = "Clubs";

    for (let i = 0; i < this.suits.length; i++) {

      for (let j = 0; j < this.ranks.length; j++) {

        this.cards[i * this.suits.length + j] = new Card(null, new CardData(this.suits[i], this.ranks[j]));
        
      }

    }

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

  getCards():Card[] {
    return this.cards;
  }

}