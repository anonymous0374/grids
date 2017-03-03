import {
    Component,
    OnInit
} from '@angular/core';
import {
    Card
} from './card/card';
import {
    Grid
} from './grids/grid';
import {
    LayoutService
} from './service/layout.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public title = 'grids';
    public cards: Card[];
    public grids: Grid[];

    constructor(private layoutService: LayoutService) {
        this.cards = [];
        this.grids = [];
    }

    ngOnInit() {
        this.grids = this.layoutService.grids;
    }

    addNormal() {
        var card = new Card(0);
        card.index = this.cards.length > 0 ? this.cards.length : 0;
        this.cards.push(card);

        try {
            this.layoutService.unOccupyGrids();
            this.layoutService.reloadCards(this.cards);        
        } catch (e) {
            console.log(e);
        }
        
    }

    addMedian() {
        var card = new Card(1);
        card.index = this.cards.length > 0 ? this.cards.length : 0;
        this.cards.push(card);

        try {
            this.layoutService.unOccupyGrids();
            this.layoutService.reloadCards(this.cards);        
        } catch (e) {
            console.log(e);
        }
    }

    addLarge() {
        var card = new Card(2);
        card.index = this.cards.length > 0 ? this.cards.length : 0;
        this.cards.push(card);
        
        try {
            this.layoutService.unOccupyGrids();
            this.layoutService.reloadCards(this.cards);        
        } catch (e) {
            console.log(e);
        }
    }

    onDrop() {
        console.log('dropped in angular');
    }

    onDragOver(event) {        
        event.dataTransfer.dropEffect = "move";
    }

    reload(event) {        
        this.layoutService.reloadCards(this.cards);
    }

}