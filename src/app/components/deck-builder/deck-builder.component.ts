import { Component, OnInit } from '@angular/core';
import { DeckService } from 'src/app/services/deck.service';
import { Deck } from 'src/app/model/Deck';

@Component({
  selector: 'app-deck-builder',
  templateUrl: './deck-builder.component.html',
  styleUrls: ['./deck-builder.component.css']
})
export class DeckBuilderComponent implements OnInit {

  constructor(private deckService:DeckService) { }

  deck: Deck;

  ngOnInit() {
    this.deck = this.deckService.getDeck();
  }



}
