import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Card } from '../card/card';
import { Grid } from './grid';
import { LayoutService } from '../service/layout.service';

@Component({
    selector: 'app-grids',
    templateUrl: './grids.component.html',
    styleUrls: ['./grids.component.css']
})
export class GridsComponent implements OnInit {
    @Input()
    public cards: Card[];
    @Input()
    public grids: Grid[];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
  	    
    }    

    public removeCard(grid: Grid) {        
        this.cards.forEach((card, i) => {
            if (card.index === grid.cardIndex) {
                this.cards.splice(i, 1);
            }
        });
        
        this.layoutService.unOccupyGrids();
        this.layoutService.reloadCards(this.cards);

        console.log('grid: ' + grid.gridIndex + ' removed!');
    }

    public getCard(grid: Grid): Card {
      for (var i = 0; i < this.cards.length; i++) {
          if (this.cards[i].index && this.cards[i].index === grid.cardIndex) {
              return this.cards[i];
          }
      }

      return null;
    }

}
