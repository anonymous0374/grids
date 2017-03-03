import { Component, OnInit } from '@angular/core';
import { Card } from './card/card';
import { Grid } from './grids/grid';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public title = 'grids';
    

    constructor() {
    }

    ngOnInit() {
        
    }        

}