import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private fireservice: AngularFirestore) { }

   getProducts() {
    return this.fireservice.collection("products").snapshotChanges();
  }

  addProduct(product: Object) {
      return this.fireservice.collection('products').add(product);
  }
}
