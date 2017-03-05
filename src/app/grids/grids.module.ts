import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridsComponent } from './grids.component';
import { CardComponent } from '../card/card.component';
import { LayoutService } from '../service/layout.service';
import { GridsConfigurationService } from '../service/grids.configuration.service';

import { DndModule } from 'ng2-dnd';


@NgModule({
  imports: [ 
    CommonModule,
    DndModule.forRoot()
  ],
  exports: [ GridsComponent ],
  declarations: [ GridsComponent, CardComponent ],
  providers: [ LayoutService,
      GridsConfigurationService ]
})
export class GridsModule { }
