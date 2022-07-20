import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Order } from "../../../shared/models/Order";
import { OrderService } from 'src/app/feature/products/orders/ordersService/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders!: any[];

  constructor(private orderService: OrderService, 
              private router: Router,
              private toast: NgToastService
            ) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((data) => {
      this.orders = data.map((order) => {
        const product = order.payload.doc.data();
        console.log(order.payload.doc.id);
        console.log("productNew",{ ...(product as Object), id: order.payload.doc.id} );

        return { ...(product as Object), id: order.payload.doc.id}
      });
    })
  }

  deleteOrder(id: any) {
    this.toast.error({
      detail: 'Product Deleted',
      summary: 'You successfully deleted the product',
      duration: 5000,
    });
    this.orderService.deleteOrder(id);
  }

  getOrder(id: any) {
    console.log("getOrder",id);
  }

}
