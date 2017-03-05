export class Card {
    public cssClass: string;
    public index: number;
    constructor (public type: number, public text?: string) {
        // type: 0: normal, 1: median, 2: large
        this.cssClass = '';
    }
}
