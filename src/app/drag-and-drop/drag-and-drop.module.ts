import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragAndDropComponent } from './drag-and-drop.component';
import { DndModule } from 'ng2-dnd';

@NgModule({
  imports: [
    CommonModule,
    DragAndDropModule,
    DndModule.forRoot()
  ],
  declarations: [],
  exports: [ DragAndDropComponent ]
})
export class DragAndDropModule { }
