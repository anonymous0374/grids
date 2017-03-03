import { Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { GridsComponent } from '../grids/grids.component';
import { GridsDndComponent } from '../grids-dnd/grids-dnd.component';

export const routes: Routes = [
    { path: "", redirectTo: "grids", pathMatch: "full" },    
    { path: "grids", component: GridsComponent },
    { path: "grids-dnd", component: GridsDndComponent }
];