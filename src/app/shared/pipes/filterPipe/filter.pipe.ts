import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../../models/Product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(Products: Product[], search: string): Product[] {

    if(Products && search) {
      return Products.filter((d)=> d.title.toLowerCase().indexOf(search.toLowerCase()) > -1)
    }
    return Products;
  }

}
