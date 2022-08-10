import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Order {
  productName: string,
  productBrand: string,
  productColor: string,
  productSize: string,
  customerName: string,
  customerLastName: string,
};


@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  // orders = this.socket.fromEvent<string>('message');

  // constructor(private socket: Socket) { }

  // getOrders() {
  //   this.socket.emit('message', "Neka poruka mala !!!");
  //   this.socket.on('message', (message: { data: any; })=> {
  //     console.log(message.data)
  //   })
  // };

  // ~~~~~  NACIN BROJ 2 ~~~!!!!

  ws!: WebSocket;

  getOrders():Observable<Order> | any {
    this.ws = new WebSocket('ws://localhost:8080');
    // this.ws.send("Hello server its msg from client");
    let order = {
      productName: "",
      productBrand: "",
      productColor: "",
      productSize: "",
      customerName: "",
      customerLastName: "",
    };


    this.ws.onmessage = (message) => {
      console.log(message.data);
      console.log(`We received message from the server ${message.data}`);

       order = message.data;
    }

    return order;
  }

  disconnect() {
    // // Close the connection, if open.
    if (this.ws.readyState === WebSocket.OPEN) {
      this.ws.close();
      console.log("Stop !!!")
    }
  }
}
