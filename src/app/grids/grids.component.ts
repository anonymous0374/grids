import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Card } from '../card/card';
import { Grid } from './grid';
import { CardComponent } from '../card/card.component';
import { LayoutService } from '../service/layout.service';
import { GridsConfigurationService } from '../service/grids.configuration.service';

@Component({
    selector: 'app-grids',
    templateUrl: './grids.component.html',
    styleUrls: ['./grids.component.css']
})
export class GridsComponent implements OnInit {
    grids: Grid[];
    cards: Card[];

    constructor(public layoutService: LayoutService,
        private gridsConfigruationService: GridsConfigurationService) {
        this.cards = [];
        this.grids = []; 
      
    }

    ngOnInit() {
        this.gridsConfigruationService.getGrids()
            .subscribe(res => this.grids = res);
        console.log('grids init...');
    }    

    removeCard(grid: Grid) {        
        this.cards.forEach((card, i) => {
            if (card.index === grid.cardIndex) {
                this.cards.splice(i, 1);
            }
        });
        
        this.reloadCards();

        console.log('grid: ' + grid.gridIndex + ' removed!');
    }

    getCard(grid: Grid): Card {
      for (var i = 0; i < this.cards.length; i++) {
          if (this.cards[i].index && this.cards[i].index === grid.cardIndex) {
              return this.cards[i];
          }
      }

      return null;
    }

    addNormal() {
        var card = new Card(0);
        card.index = this.cards.length > 0 ? this.cards.length : 0;
        if (this.layoutService.allocateGridsForNormalCard(card, this.grids, false)
            .length === 1) {
            this.cards.push(card); 
            this.reloadCards();
        }
    }

    addMedian() {
        var card = new Card(1);
        card.index = this.cards.length > 0 ? this.cards.length : 0;
        if (this.layoutService.allocateGridsForMedianCard(card, this.grids, false)
            .length === 2) {
            this.cards.push(card); 
            this.reloadCards();
        }        
    }

    addLarge() {
        var card = new Card(2);
        card.index = this.cards.length > 0 ? this.cards.length : 0;
        if (this.layoutService.allocateGridsForLargeCard(card, this.grids, false)
            .length === 4) {
            this.cards.push(card); 
            this.reloadCards();
        }
    }

    enlargeCard(grid: Grid) {
        var card = this.layoutService.getCard(grid, this.cards);
        card.type > 1 ? '' : card.type += 1;

        this.reloadCards();
    }

    reduceCard(grid: Grid) {
        var card = this.layoutService.getCard(grid, this.cards);
        card.type < 1 ? '' : card.type -= 1;

        this.reloadCards();
    }

    reloadCards() {
        try {            
            this.layoutService.reloadCards(this.cards, this.grids); 
        } catch (e) {
            console.log(e);
        }
    }

    drop(event) {
        console.log(event);
        var draggedGrid = event.dragData;
        var draggedCardIndex = this.layoutService.getCard(draggedGrid, this.cards).index;
        var target = event.mouseEvent.target;        
        var targetCardIndex = -1;
        if (target.id && target.id.slice(0, 6) === 'cardid') {
            targetCardIndex = Number(target.id.slice(6, target.id.length));
            this.swap(draggedCardIndex, targetCardIndex);
            this.reloadCards();
        } else {
            console.log('not droppable, should drop to a card.');
            return;
        }               

    }

    swap(cardIndex1: number, cardIndex2: number) {
        var pos1 = null, pos2 = null, tmpCard = null;
        this.cards.forEach((card, i) => {
            if (card.index === cardIndex1) {
                pos1 = i;
            }
            if (card.index === cardIndex2) {
                pos2 = i;
            }
            if (pos1 && pos2) {
                return true;
            }
        });
        
        tmpCard = this.cards[pos1];
        this.cards[pos1] = this.cards[pos2];
        this.cards[pos2] = tmpCard;        
    }

    printGridState() : void {
        console.log('grids count: ' + this.grids.length + 
            ', cards count: ' + this.cards.length);
        console.log('this grids have cards: ');
        this.grids.forEach(grid => {
            if (grid.reserved) {
                console.log(grid.gridIndex);
            }
        });
        console.log('current cards sequence: ');
        this.cards.forEach(card => {
            console.log(card.index);
        });
    }

}
