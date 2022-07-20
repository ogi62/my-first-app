import { Injectable } from '@angular/core';
import { Product } from '../../../../models/Product'
import { Products } from '../models/mock-products';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  products: Product[] = Products;
  constructor() { }

  getProducts() {
    return this.products;
  }
}
