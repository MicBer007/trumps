import { Component, OnInit } from '@angular/core';
import { DeckService } from 'src/app/services/deck.service';
import { Deck } from 'src/app/model/Deck';
import { Player } from 'src/app/model/Player';

@Component({
  selector: 'app-deck-builder',
  templateUrl: './deck-builder.component.html',
  styleUrls: ['./deck-builder.component.css']
})
export class DeckBuilderComponent implements OnInit {

  constructor(private deckService:DeckService) { }

  deck: Deck;

  players: Player[] = [];

  amountOfPlayers: number = 52;

  hasDuplicates = this.players.some((player, index) => this.players.indexOf(player) !=  index);

  ngOnInit() {

    this.deck = this.deckService.getDeck();
    this.deck.suffle();

    for(let i = 0; i < this.amountOfPlayers; i++) {

      this.players.push(new Player())
      
      this.deck.DealCardToPlayer(this.players[i]);

    }

  }

}
