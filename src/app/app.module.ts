import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GridsModule } from './grids/grids.module';
import { CardComponent } from './card/card.component';

import { DndModule } from 'ng2-dnd';

import { routes } from './routes/app.routes';
import { GridsDndComponent } from './grids-dnd/grids-dnd.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    GridsDndComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GridsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
