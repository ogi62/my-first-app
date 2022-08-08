// const http = require("http").createServer();

// const io = require("socket.io")(http, {
//     cors: { origin: '*'}
// });

// io.on('connection', (socket) => {
//     console.log('a user connected');

//     socket.on('message', (message)=> {
//         console.log(`Poruka u boci :) !!! ${message.data}`);
//         io.emit('message',`${socket.id.substr(0,2)}  said ${message}`);
//     });

// })

// http.listen(8080, ()=> console.log('listening on port http://port:8080'));




//  POKUSAJ BROJ  2. !!!


// 1.
const http = require('http');
//4.
const WebSocketServer = require('websocket').server;
// 6.1
let connection = null;

//2.
const httpserver = http.createServer((req, res) => {
    console.log('we have received response');
});

//5. handshake part
const websocket = new WebSocketServer({
    'httpServer': httpserver
});

//6.
websocket.on('request', request => {
    
    //6.1 we are accepting the connection ... 
    connection = request.accept(null, request.origin)

    //7. 
    connection.on('open', ()=> console.log('Opened'));
    //7.1
    connection.on('close', ()=> console.log('Closed'));
    //7.2
    connection.on('message', (message)=> {
        console.log(`Show the message ${message.utf8Data}`);
    });


    //9,
    sendEvery5Sec();
})

//3.
httpserver.listen(8080, ()=> console.log('Server is listening on port 8080 :)'));

//8.
function sendEvery5Sec() {

    const shoes = ['Adidas','Nike','Reebok','Puma'];
    connection.send(`Random Shoes type to the client every five seconds ... ${shoes[Math.floor(Math.random() * 4)]}`);

    setTimeout(sendEvery5Sec, 5000);
}