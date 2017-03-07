import { Injectable } from '@angular/core';
import { Grid } from '../grids/grid';
import { Card } from '../card/card';

@Injectable()
export class LayoutService {           

    constructor() {
        
    }

    /*
    * @param card - Card, the card to place on the grids
    * @param grids - Grid[], the grids to hold the cards
    * @param reserveGrid - boolean, wheather to mark the grids as reserved if 
    *   the grids are able and available hold the card.
    * @param startPoint - number, check available grids starting from the grid
    *   with this index.
    * @return grids - Grid [], available grids to hold such card.   
    */
    allocateGridsForNormalCard(card: Card, grids: Grid[], 
        reserveGrid?: boolean, startPoint?: number): Grid[] {
        let i = 0, len = grids.length;
        startPoint ? i = startPoint : 0;

        for (i; i < len; i++) {
            if (!grids[i].reserved) {
                if (reserveGrid) {
                    // update states of both grids and cards
                    grids[i].reserved = true; 
                    grids[i].cardIndex = card.index;
                    grids[i].isCardStartPoint = true;

                    card.cssClass = grids[i].cssClass;                    
                }                

                return [grids[i]];
            }
        }

        console.log('sorry, there is no enough grids for normal.');
        return [];
    }

    allocateGridsForMedianCard(card: Card, grids: Grid[], 
        reserveGrid?: boolean, startPoint?: number): Grid[] {
        let i = 0, len = grids.length;
        startPoint ? i = startPoint : 0;

        for (i; i < len - 1; i++) {
            if ((6 - i % 6) > 1) {
                if (!(grids[i].reserved || grids[i + 1].reserved)) {                    
                    if (reserveGrid) {
                        grids[i].reserved = true;
                        grids[i].cardIndex = card.index;
                        grids[i + 1].reserved = true;
                        grids[i + 1].cardIndex = card.index;
                        grids[i].isCardStartPoint = true;
                                                
                        card.cssClass = grids[i].cssClass;
                    }                    

                    return [grids[i], grids[i + 1]];
                }
            }
        }

        console.log('sorry, there is no enough grids for median.');
        return [];
    }

    allocateGridsForLargeCard(card: Card, grids: Grid[], 
        reserveGrid?: boolean, startPoint?: number): Grid[] {
        let i = 0, len = grids.length;        
        let roof: Grid[];
        let foot: Grid[];        

        startPoint ? i = startPoint : 0;

        for (i; i < len; i++) {
            if ((6 - i % 6 > 1)) {
                // don't reserve yet
                roof = this.allocateGridsForMedianCard(card, grids, false, i);
                if (roof.length === 2) {
                    // don't reserve yet
                    foot = this.allocateGridsForMedianCard(card, grids, false, (roof[0].gridIndex + 6));
                    if (foot.length !== 2) {
                        continue;
                    }

                    if (roof[0].gridIndex + 6 === foot[0].gridIndex &&
                        roof[1].gridIndex + 6 === foot[1].gridIndex) {
                        if (reserveGrid) {
                            roof[0].reserved = true;
                            roof[1].reserved = true;
                            foot[0].reserved = true;
                            foot[1].reserved = true;
                            roof[0].cardIndex = card.index;
                            roof[1].cardIndex = card.index;
                            foot[0].cardIndex = card.index;
                            foot[1].cardIndex = card.index;
                            roof[0].isCardStartPoint = true;

                            card.cssClass = roof[0].cssClass;
                        }
                    
                        return [roof[0], roof[1], foot[0], foot[1]];
                    }

                } else {
                    console.log('sorry, there is no enough grids for large.');
                    return [];
                }                              
            }
        }

        console.log('sorry, there is no enough grids for large.');
        return [];    
    }

    
    allocateGridsForCard(card: Card, grids: Grid[]): Grid[] {
        let i = 0, len = grids.length;
        let rtn: Grid[] = [];

        switch (card.type) {
            case 0: {
                rtn = this.allocateGridsForNormalCard(card, grids, true);
                break;
            }
            case 1: {                
                rtn = this.allocateGridsForMedianCard(card, grids, true);
                break;
            }
            case 2: {
                rtn = this.allocateGridsForLargeCard(card, grids, true);
                break;
            }
        }
        
        return rtn;
    }    

    reloadCards(cards: Card[], grids: Grid[]): void {
        (function unOccupyGrids(grids: Grid []): void {
            grids.forEach(grid => {
                grid.reserved = false;
                grid.isCardStartPoint = false;
                grid.cardIndex = -1;
            });
        })(grids);

        cards.forEach(card => this.allocateGridsForCard(card, grids));
    }        

    getCard(grid: Grid, cards: Card[]): Card {
        // console.log('try getting a card.');
        var rtn = null;
        cards.some(card => {
            if (grid.cardIndex === card.index) {
                rtn = card;
                return true;
            } 
        });

        return rtn;
    }

    public hasCard(grid): boolean {
        return grid.reserved;
    }
}