import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Card } from '../card/card';
import { Grid } from '../grids/grid';
import { LayoutService } from '../service/layout.service';

@Component({
    selector: 'app-grids-dnd',
    templateUrl: './grids-dnd.component.html',
    styleUrls: ['./grids-dnd.component.css']
})
export class GridsDndComponent implements OnInit {
    constructor(public ls: LayoutService) { 
      
    }

    ngOnInit() {
          
    }    

    public removeCard(grid: Grid) {        
        this.ls.cards.forEach((card, i) => {
            if (card.index === grid.cardIndex) {
                this.ls.cards.splice(i, 1);
            }
        });
        
        this.ls.unOccupyGrids();
        this.ls.reloadCards();

        console.log('grid: ' + grid.gridIndex + ' removed!');
    }

    public getCard(grid: Grid): Card {
      for (var i = 0; i < this.ls.cards.length; i++) {
          if (this.ls.cards[i].index && this.ls.cards[i].index === grid.cardIndex) {
              return this.ls.cards[i];
          }
      }

      return null;
    }

    addNormal() {
        var card = new Card(0);
        card.index = this.ls.cards.length > 0 ? this.ls.cards.length : 0;
        this.ls.cards.push(card);

        try {
            this.ls.unOccupyGrids();
            this.ls.reloadCards();
        } catch (e) {
            console.log(e);
        }        
    }

    addMedian() {
        var card = new Card(1);
        card.index = this.ls.cards.length > 0 ? this.ls.cards.length : 0;
        this.ls.cards.push(card);

        try {
            this.ls.unOccupyGrids();
            this.ls.reloadCards();
        } catch (e) {
            console.log(e);
        }
    }

    addLarge() {
        var card = new Card(2);
        card.index = this.ls.cards.length > 0 ? this.ls.cards.length : 0;
        this.ls.cards.push(card);
        
        try {
            this.ls.unOccupyGrids();
            this.ls.reloadCards(); 
        } catch (e) {
            console.log(e);
        }
    }

    enlargeCard(grid: Grid) {
        var card = this.ls.getCard(grid);
        card.type > 1 ? '' : card.type += 1;

        this.ls.unOccupyGrids();
        this.reloadCards();
    }

    reduceCard(grid: Grid) {
        var card = this.ls.getCard(grid);
        card.type < 1 ? '' : card.type -= 1;

        this.ls.unOccupyGrids();
        this.reloadCards();
    }

    reloadCards() {
        this.ls.unOccupyGrids();
        this.ls.reloadCards();
    }

}
