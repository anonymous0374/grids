import { Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { GridsComponent } from '../grids/grids.component';

export const routes: Routes = [
    { path: "", redirectTo: "grids", pathMatch: "full" },
    // { path: "home", component: AppComponent },
    { path: "grids", component: GridsComponent }
];