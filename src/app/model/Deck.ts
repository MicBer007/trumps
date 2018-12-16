import { Card } from "./Card";
import { Player } from "./Player";

export class Deck {

    cardsInDeck: Card[] = [];

    cardsOutDeck: Card[] = [];

    maxCards: number;

    constructor() {

        this.maxCards = 52;
        
    }

    dealCardToAllPlayers(players:Player[]): Card[] {

        for(let i = 0; i < players.length; i++) {

            this.DealCardToPlayer(players[i]);

        }

        return this.cardsInDeck;

    }

    RemoveCardFromDeck(card: Card): void {

        this.cardsOutDeck.push(card);

        this.cardsInDeck.splice(this.cardsInDeck.indexOf(card), 1);

    }

    DealCardToPlayer(player: Player) {

        const card: Card = this.GenerateRandomCard();

        this.RemoveCardFromDeck(card)

        player.addCard(card);

    }

    suffle(): Deck {

        let j;
        let temp;

        let deck: Deck = this;
        
        for (let i = 0; i < deck.cardsInDeck.length; i++) {
    
            j = Math.floor(Math.random() * deck.cardsInDeck.length);
            temp = deck.cardsInDeck[i];
            deck.cardsInDeck[i] = deck.cardsInDeck[j];
            deck.cardsInDeck[j] = temp;
          
        }

        return deck;
    }

    GenerateRandomCard(): Card {

        return this.cardsInDeck[Math.floor(Math.random() * (this.cardsInDeck.length))];

    }

}