import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCategory'
})
export class InventoryPipesPipe implements PipeTransform {

  transform(items: any[], category: any): any {

    if (!items || !category ) {
        return items;
    }

    return items.filter((item:any) => {


      return  item.category?.detail.includes(category);
    });
  }

}
