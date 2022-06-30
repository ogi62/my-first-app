import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(Products: Array<any>, search: string): any {
    console.log(Products, search)

    if(Products && search) {
      return Products.filter((d)=> d.title.indexOf(search) > -1)
    }
    return Products;
  }

}
