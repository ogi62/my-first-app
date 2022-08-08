import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
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

  ws = new WebSocket('ws://localhost:8080');

  getOrders(): void {
    // this.ws = new WebSocket('ws://localhost:8080');
    //ZASTO NECE DA RADI ???
    // this.ws.send("Hello server its me client");

    this.ws.onmessage = message => console.log(`We received message from the server ${message.data}`);
  }

}
