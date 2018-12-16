import { TestBed } from '@angular/core/testing';

import { DeckService } from './deck.service';
import { DeckData } from '../data/DeckData';
import { Player } from '../model/Player';
import { Deck } from '../model/Deck';

describe('DeckService - Startup', () => {

  beforeEach(() => TestBed.configureTestingModule({providers: [DeckData]}));
  
  it('should create 52 cards', () => {

    const service: DeckService = TestBed.get(DeckService);
    const deck = service.getDeck();
    expect(deck.cardsInDeck.length).toBe(52);

  });
    
  it('should not have any duplicates', () => {

    const service: DeckService = TestBed.get(DeckService);
    const deck = service.getDeck();
    const compareTextCards = deck.cardsInDeck.map(card => card.text);
    const hasAnyDuplicates = compareTextCards.some((cardText, index) => compareTextCards.indexOf(cardText) != index);
    expect(hasAnyDuplicates).toBeFalsy();

  });

  it('should shuffle properly', () => {

    const service: DeckService = TestBed.get(DeckService);
    let oldDeck = service.getDeck();
    let newDeck = service.getDeck();
    newDeck.suffle();

    if (oldDeck.cardsInDeck[10].text == newDeck.cardsInDeck[10].text) {

      if (oldDeck.cardsInDeck[20].text == newDeck.cardsInDeck[20].text) {

        if (oldDeck.cardsInDeck[30].text == newDeck.cardsInDeck[30].text) {

          if (oldDeck.cardsInDeck[40].text == newDeck.cardsInDeck[40].text) {

            expect(oldDeck.cardsInDeck[50].text).toEqual(newDeck.cardsInDeck[50].text)

          }

        }

      }

    }

  });

  it('should deal properly', () => {

    const service: DeckService = TestBed.get(DeckService);

    const deck: Deck = service.getDeck();

    const player:Player = new Player();
    
    deck.DealCardToPlayer(player);

    expect(deck.cardsOutDeck).toContain(player.cards[0]);
    
    const players: Player[] = []
    
    const amountOfPlayers: number = 4;

    for (let i = 0; i < amountOfPlayers; i++) {

      players.push(new Player());

      deck.DealCardToPlayer(players[i]);

    }

    let cards = players.map(player => player.cards);

    let hasDuplicates = cards.some((card, index) => cards.indexOf(card) != index);

    expect(hasDuplicates).toBeFalsy();

    deck.dealCardToAllPlayers(players);

    cards = players.map(player => player.cards);

    hasDuplicates = cards.some((card, index) => cards.indexOf(card) != index);

    expect(hasDuplicates).toBeFalsy();

  });
   
});

