import { Injectable } from '@angular/core';
import { from, Observable, of, Subject } from 'rxjs';

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
  order$: Subject<any> = new Subject<any>();

  getOrders():any {
    this.ws = new WebSocket('ws://localhost:8080');
    // this.ws.send("Hello server its msg from client");
    // let order = {
    //   productName: "",
    //   productBrand: "",
    //   productColor: "",
    //   productSize: "",
    //   customerName: "",
    //   customerLastName: "",
    // };


     this.ws.onmessage = (message) => {
      console.log(JSON.parse(message.data));
      console.log(`We received message from the server ${message.data}`);

      this.order$.next(JSON.parse(message.data));
      //  return order;

    }

  }

  disconnect() {
    // // Close the connection, if open.
    if (this.ws.readyState === WebSocket.OPEN) {
      this.ws.close();
      console.log("Stop !!!")
    }
  }
}
