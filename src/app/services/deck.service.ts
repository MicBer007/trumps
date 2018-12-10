import { Injectable } from '@angular/core';
import { DeckData } from '../data/DeckData';
import { Deck } from '../model/Deck';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  constructor(private deckData:DeckData) { }

  getDeck(): Deck{

    return this.deckData.createDeck();
    
  }

}
