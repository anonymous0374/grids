import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridsComponent } from './grids.component';
import { LayoutService } from '../service/layout.service';
import { GridsConfigurationService } from '../service/grids.configuration.service';


@NgModule({
  imports: [ 
    CommonModule    
  ],
  exports: [ GridsComponent ],
  declarations: [ GridsComponent ],
  providers: [ LayoutService,
      GridsConfigurationService ]
})
export class GridsModule { }
