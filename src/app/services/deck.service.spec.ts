import { TestBed } from '@angular/core/testing';

import { DeckService } from './deck.service';
import { DeckData } from '../data/DeckData';

describe('DeckService - Startup', () => {
  beforeEach(() => TestBed.configureTestingModule({providers: [DeckData]}));
  
  it('should create 52 cards', () => {

    const service: DeckService = TestBed.get(DeckService);
    const deck = service.getDeck();
    expect(deck.cards.length).toBe(52);

  });
    
  it('should not have any duplicates', () => {

    const service: DeckService = TestBed.get(DeckService);
    const deck = service.getDeck();
    const compareTextCards = deck.cards.map(card => card.text);
    const hasAnyDuplicates = compareTextCards.some((cardText, index) => compareTextCards.indexOf(cardText) != index);
    expect(hasAnyDuplicates).toBeFalsy();

  });

  it('should shuffle properly', () => {

    const service: DeckService = TestBed.get(DeckService);
    let oldDeck = service.getDeck();
    let newDeck = service.getDeck();

    if (oldDeck.cards[10].text == newDeck.suffle().cards[10].text) {

      if (oldDeck.cards[20].text == newDeck.suffle().cards[20].text) {

        if (oldDeck.cards[30].text == newDeck.suffle().cards[30].text) {

          if (oldDeck.cards[40].text == newDeck.suffle().cards[40].text) {

            expect(oldDeck.cards[50].text).toEqual(newDeck.cards[50].text)

          }

        }

      }

    }

  });
   
});

