import { Component, OnInit } from '@angular/core';
import { Deck } from '../Data/Deck';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private deck:Deck) { }

  ngOnInit() {
    this.deck = new Deck();
    this.deck.getCards
  }

}
