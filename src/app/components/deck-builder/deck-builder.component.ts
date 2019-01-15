import { Component, OnInit } from '@angular/core';
import { DeckService } from 'src/app/services/deck.service';
import { Deck } from 'src/app/model/Deck';
import { Player } from 'src/app/model/Player';
import { Card } from 'src/app/model/Card';
import { wrapListenerWithDirtyLogic } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-deck-builder',

  templateUrl: './deck-builder.component.html',

  // template: '<div *ngFor = "let card of deck.cardsInDeck"><img width = "50" height = "70" src = "assets/images/{{card.rank}}_{{card.suite}}.png" alt = "card"></div><button class = "button" type = "text" (click) = "shuffleDeck()">shuffle</button><div>{{hasDuplicates}}</div>',
  
  styleUrls: ['./deck-builder.component.css']
  
})
export class DeckBuilderComponent implements OnInit {

  constructor(private deckService:DeckService) { }

  phase: number = 0;

  playerNum: number = 0;

  cardsDealt: number[] = [];

  deck: Deck;

  players: Player[] = [];

  amountOfPlayers: number = 4;

  hasDuplicates: boolean = false;

  trumpCard: Card;

  roundNumber: number = 0;

  amountOfCardsToDeal: number;

  ngOnInit() {

    this.deck = this.deckService.getDeck();

    this.setCardsDealt();

    this.round();

  }

  round() {

    if (this.roundNumber < this.cardsDealt.length) {

      this.deck.placeCardsInDeck();

      this.CreateAllThePlayers();

      this.amountOfCardsToDeal = this.cardsDealt[this.roundNumber];

      this.trumpCard = this.deck.randomCard();

      for(let i = 0; i < this.amountOfCardsToDeal; i++) {

        this.DealCardToAllPlayers();

      }

      this.roundNumber++;

      this.phase = 1;

    } else {

    }

  }

  setTricks(tricks:number) {

    this.players[this.playerNum].tricks = tricks;

    if(this.playerNum == this.amountOfPlayers - 1) {

      this.playerNum = 0;

    } else {

      this.playerNum++;

    }

  }

  setCardsDealt() {

    this.cardsDealt = [];

    for(let i = 0; i < this.amountOfPlayers; i++) {

      this.cardsDealt.push(1);

    }

    this.cardsDealt.push(2);
    this.cardsDealt.push(3);
    this.cardsDealt.push(4);
    this.cardsDealt.push(5);
    this.cardsDealt.push(6);
    this.cardsDealt.push(7);

    for(let i = 0; i < this.amountOfPlayers; i++) {

      this.cardsDealt.push(8);

    }

    this.cardsDealt.push(7);
    this.cardsDealt.push(6);
    this.cardsDealt.push(5);
    this.cardsDealt.push(4);
    this.cardsDealt.push(3);
    this.cardsDealt.push(2);

    for(let i = 0; i < this.amountOfPlayers; i++) {

      this.cardsDealt.push(1);

    }

  }

  DealCardToAllPlayers(): void {

    this.deck.dealCardToAllPlayers(this.players);

  }

  shuffleDeck(): void {
    this.deck.suffle();

    this.hasDuplicates = this.deck.cardsInDeck.some((card, index) => this.deck.cardsInDeck.indexOf(card) != index);
  }

  CreateAllThePlayers(): void {

    this.players = [];

    for(let i = 0; i < this.amountOfPlayers; i++) {
      
      this.players.push(new Player());

    }

  }

}
