import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Card } from './card';
import { Grid } from '../grids/grid';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
    @Input()
    public card: Card;


    constructor() { }

    ngOnInit() {        
  
    }

}
