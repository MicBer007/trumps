export class Card {

  suite: string;
  rank: string;

  key: string;

  constructor(key: string = null, cardData: CardData = new CardData()) {
    this.key = key;

    this.suite = cardData.suite;
    this.rank = cardData.rank;

  }

  toCardData(): CardData {
    
    return new CardData(this.suite, this.rank);

  }

}

export class CardData {

  suite: string;
  rank: string;

  constructor(suite: string = null, rank: string = null) {
    this.suite = suite;
    this.rank = rank;
  }

  toCard(key: string = null): Card {

    return new Card(key, new CardData(this.rank, this.suite));
    
  }

}