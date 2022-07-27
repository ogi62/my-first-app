import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  orders = this.socket.fromEvent<string>('message');


  constructor(private socket: Socket) { }

  getOrders() {
    this.socket.emit('message', "Neka poruka mala !!!");
    this.socket.on('message', (message: { data: any; })=> {
      console.log(message.data)
    })
  };

}
