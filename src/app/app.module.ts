import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

import { GridsModule } from './grids/grids.module';
import { DragAndDropModule }  from './drag-and-drop/drag-and-drop.module';

import { routes } from './routes/app.routes';

@NgModule({
  declarations: [
    AppComponent, 
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    GridsModule,
    DragAndDropModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
