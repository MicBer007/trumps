export class Card {

  suite: string;
  rank: string;

  get text():string {
    return `${this.rank} ${this.suite}`;
  }

  constructor(suite:string, rank:string) {

    this.suite = suite;
    this.rank = rank;

  }

}