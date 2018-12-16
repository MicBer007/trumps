import { Card } from "./Card";

export class Player {

    cards: Card[] = [];

    constructor() {

    }

    addCard(card: Card): Card[] {

        this.cards.push(card);

        return this.cards;

    }

}