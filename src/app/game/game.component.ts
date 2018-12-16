import { Component, OnInit } from '@angular/core';
import { Deck } from '../model/Deck';
import { Player } from '../model/Player';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  amountOfPlayers: number = 4;

  deck:Deck;

  players: Player[];

  constructor( ) { }

  ngOnInit() {

    this.deck = new Deck();

    this.players = [];

    for(let i = 0; i < this.amountOfPlayers; i++) {

      this.players.push(new Player());

    }

    this.deck.dealCardToAllPlayers(this.players);
    
  }

}
