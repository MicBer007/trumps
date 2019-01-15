export class Card {

  suite: string;
  rank: string;

  src: string;

  get text():string {
    return `${this.rank} of ${this.suite}`;
  }

  constructor(suite:string, rank:string) {

    this.suite = suite;
    this.rank = rank;

    this.src = `assets/images/${rank}_${suite}.png`;

  }

}