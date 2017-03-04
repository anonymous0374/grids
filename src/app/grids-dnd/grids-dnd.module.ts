import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridsDndComponent } from './grids-dnd.component';

import { LayoutService } from '../service/layout.service';

import { DndModule } from 'ng2-dnd';

@NgModule({
  imports: [
    CommonModule,    
    DndModule.forRoot()
  ],
  providers: [ LayoutService ],
  declarations: [ GridsDndComponent ],
  exports: [ GridsDndComponent ]
})
export class GridsDndModule { }  
