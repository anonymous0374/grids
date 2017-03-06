import { Component, OnInit, OnDestroy } from '@angular/core';
import { Input } from '@angular/core';
import { Card } from './card';
import { Grid } from '../grids/grid';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy {
    @Input()
    public card: Card;


    constructor() { }

    ngOnInit() {        
        console.log('card component init, card index: ' + this.card.index);
    }

    ngOnDestroy() {
    	console.log('card component destoryed');
    }

    destruct() {
    	
    }

}
