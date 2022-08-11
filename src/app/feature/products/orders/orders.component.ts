import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Order } from "../../../shared/models/Order";
import { OrderService } from 'src/app/feature/products/orders/ordersService/order.service';
import { WebsocketService } from './ordersService/websocket.service';
import { Subject, takeUntil, takeWhile } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit,OnDestroy {

  orders!: any[];

  constructor(private orderService: OrderService, 
              private router: Router,
              private toast: NgToastService,
              private websocketService: WebsocketService
            ) {}
  

  ngOnInit() {
    this.orderService.getOrders().subscribe((data) => {
      this.orders = data.map((order) => {
        const product = order.payload.doc.data();

        return { ...(product as Object), id: order.payload.doc.id}
      });
      this.websocketService.getOrders();
      this.websocketService.order$
      .subscribe((data:any)=> {
        this.orders.push(data);
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

  ngOnDestroy(): void {
    this.websocketService.disconnect();
  }

}
