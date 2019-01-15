import { Card } from "./Card";

export class Player {

    cards: Card[] = [];

    tricks: number;

    set setTricks(tricks: number) {
        this.tricks = tricks;
    }

    constructor() {

    }

    addCard(card: Card): Card[] {

        this.cards.push(card);

        return this.cards;

    }

}