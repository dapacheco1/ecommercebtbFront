import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filter: any): any {
    console.log(items);

    if (!items || !filter) {
        return items;
    }
    return items.filter((item:any) => {
      return item.genre?.genre.includes(filter);
    });
  }
}
