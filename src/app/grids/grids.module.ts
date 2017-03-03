import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../service/layout.service';
import { GridsComponent } from './grids.component';

@NgModule({
  imports: [ 
    CommonModule    
  ],
  exports: [ GridsComponent ],
  declarations: [ GridsComponent ],
  providers: [ LayoutService ]
})
export class GridsModule { }
