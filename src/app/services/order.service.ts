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

getOrders() {
  return this.orderService.collection("orders").snapshotChanges();
}

deleteOrder(id: any) {
  this.orderService.doc('orders/' + id).delete();
}

getOrder(id: any) {
  return this.orderService.collection("orders").doc(id).valueChanges();
}


}
