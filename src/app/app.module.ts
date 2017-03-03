import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GridsModule } from './grids/grids.module';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,    
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GridsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
