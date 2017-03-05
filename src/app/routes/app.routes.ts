import { Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { GridsComponent } from '../grids/grids.component';
import { DragAndDropComponent } from '../drag-and-drop/drag-and-drop.component';

export const routes: Routes = [
    { path: "", redirectTo: "grids", pathMatch: "full" },    
    { path: "grids", component: GridsComponent }, 
    { path: "drag-and-drop", component: DragAndDropComponent }
];