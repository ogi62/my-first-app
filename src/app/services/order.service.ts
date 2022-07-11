import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private orderService: AngularFirestore) { }

  addOrder(order: Order) {
    return this.orderService.collection('orders').add(order);
}
}
