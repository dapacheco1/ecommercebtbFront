import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../pipes/filter.pipe';
import { InventoryPipesPipe } from '../pipes/inventory-pipes.pipe';



@NgModule({
  declarations: [
    FilterPipe,
    InventoryPipesPipe
  ],
  imports: [
    CommonModule,

  ],
  exports:[
    FilterPipe,
    InventoryPipesPipe
  ]
})
export class CustomPipesModule { }
