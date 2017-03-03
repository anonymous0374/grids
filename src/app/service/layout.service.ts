import { Injectable } from '@angular/core';
import { Grid } from '../grids/grid';
import { Card } from '../card/card';

@Injectable()
export class LayoutService {
    public grids: Grid[];
    public cards: Card[];
    public currentGrid: Grid;
    public needSpace: number[];

    constructor() {
        this.grids = [
            new Grid('grid0', false),
            new Grid('grid1', false),
            new Grid('grid2', false),
            new Grid('grid3', false),
            new Grid('grid4', false),
            new Grid('grid5', false),
            new Grid('grid6', false),
            new Grid('grid7', false),
            new Grid('grid8', false),
            new Grid('grid9', false),
            new Grid('grid10', false),
            new Grid('grid11', false),
            new Grid('grid12', false),
            new Grid('grid13', false),
            new Grid('grid14', false),
            new Grid('grid15', false),
            new Grid('grid16', false),
            new Grid('grid17', false),
            new Grid('grid18', false),
            new Grid('grid19', false),
            new Grid('grid20', false),
            new Grid('grid21', false),
            new Grid('grid22', false),
            new Grid('grid23', false)
        ];

        this.cards = [];
    }

    public getNormalGrid(card: Card, currentGrid: Grid, doOccupy ? : boolean): Grid[] {
        let i = currentGrid.gridIndex + 1, len = this.grids.length;
        
        for (i; i < len; i++) {
            if (!this.grids[i].occupied) {
                if (doOccupy) {
                    this.grids[i].occupied = true;
                    card.className = this.grids[i].gridClass;                    
                }
                this.grids[i].cardIndex = card.index;

                return [this.grids[i]];
            }
        }

        return [];
    }

    public getNormalGridCompact(card: Card, doOccupy ? : boolean): Grid[] {
        let i = 0, len = this.grids.length;
        
        for (i = 0; i < len; i++) {
            if (!this.grids[i].occupied) {
                if (doOccupy) {
                    this.grids[i].occupied = true;
                    card.className = this.grids[i].gridClass;                    
                }
                this.grids[i].cardIndex = card.index;

                return [this.grids[i]];             
            }
        }

        return [];
    }

    public getMedianGrid(card: Card, currentGrid: Grid, doOccupy ? : boolean): Grid[] {        
        let i = currentGrid.gridIndex + 1, len = this.grids.length;

        for (i; i < len - 1; i++) {
            if ((6 - i % 6) > 1) {
                if (!(this.grids[i].occupied || this.grids[i+1].occupied)) {
                    card.className = this.grids[i].gridClass;
                    if (doOccupy) {
                            this.grids[i].occupied = true;
                            this.grids[i + 1].occupied = true;
                    }
                    this.grids[i].cardIndex = card.index;
                    this.grids[i + 1].cardIndex = card.index;

                    return [this.grids[i], this.grids[i + 1]];
                }
            }
        }


        return [];
    }

    public getMedianGridCompact(card: Card, doOccupy ? : boolean): Grid[] {
        let i = 0, len = this.grids.length;

        for (i; i < len - 1; i++) {
            if ((6 - i % 6) > 1) {
                if (!(this.grids[i].occupied || this.grids[i + 1].occupied)) {
                    card.className = this.grids[i].gridClass;
                    if (doOccupy) {
                            this.grids[i].occupied = true;
                            this.grids[i + 1].occupied = true;
                    }
                    this.grids[i].cardIndex = card.index;
                    this.grids[i + 1].cardIndex = card.index;

                    return [this.grids[i], this.grids[i + 1]];
                }
            }
        }


        return [];
    }

    public getLargeGrid(card: Card, currentGrid: Grid, doOccupy ? : boolean): Grid[] {
        let roof: Grid[];
        let foot: Grid[];       
        let i = currentGrid.gridIndex, len = this.grids.length;

        for (i = 0; i < len; i++) {
            if ((6 - i % 6 > 1)) {
                roof = this.getMedianGridCompact(card, true);
                foot = this.getMedianGrid(card, this.grids[roof[0].gridIndex + 6 - 1], true);
                if (roof[0].gridIndex + 6 === foot[0].gridIndex &&
                    roof[1].gridIndex + 6 === foot[1].gridIndex) {
                    if (doOccupy) {
                        roof[0].occupied = true;
                        roof[1].occupied = true;
                        foot[0].occupied = true;
                        foot[1].occupied = true;
                    }

                    card.className = roof[0].gridClass;
                    roof[0].cardIndex = card.index;
                    roof[1].cardIndex = card.index;
                    foot[0].cardIndex = card.index;
                    foot[1].cardIndex = card.index;

                    return [roof[0], roof[1], foot[0], foot[1]];
                }
            }
        }

        return [];
    }

    public getLargeGridCompact(card: Card, doOccupy ? : boolean): Grid[] {
        let roof: Grid[];
        let foot: Grid[];       
        let i = 0, len = this.grids.length;

        for (i = 0; i < len; i++) {
            if ((6 - i % 6 > 1)) {
                roof = this.getMedianGridCompact(card, true);
                foot = this.getMedianGrid(card, this.grids[roof[0].gridIndex + 6 - 1], true);
                if (roof[0].gridIndex + 6 === foot[0].gridIndex &&
                    roof[1].gridIndex + 6 === foot[1].gridIndex) {
                    if (doOccupy) {
                        roof[0].occupied = true;
                        roof[1].occupied = true;
                        foot[0].occupied = true;
                        foot[1].occupied = true;
                    }

                    card.className = roof[0].gridClass;
                    return [roof[0], roof[1], foot[0], foot[1]];
                }
            }
        }

        return [];
    }


    public reloadCards(): void {
        this.cards.forEach(card => {
            if (card.type === 0) {
                this.getNormalGridCompact(card, true);
            } else if (card.type === 1) {
                this.getMedianGridCompact(card, true);
            } else if (card.type === 2) {
                this.getLargeGridCompact(card, true);
            }
        });        
    }

    public unOccupyGrids(): void {
        this.grids.forEach(grid => {
            grid.occupied = false;
            grid.cardIndex = -1;            
        });
    }

    public getCard(grid: Grid): Card {
        var rtn = null;
        this.cards.some(card => {
            if (grid.cardIndex === card.index) {
                rtn = card;
                return true;
            } 
        });

        return rtn;
    }

    public hasCard(grid): boolean {
        return grid.occupied;
    }
}