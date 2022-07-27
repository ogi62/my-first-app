const http = require("http").createServer();

const io = require("socket.io")(http, {
    cors: { origin: '*'}
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('message', (message)=> {
        console.log(`Poruka u boci :) !!! ${message.data}`);
    });

})

http.listen(8080, ()=> console.log('listening on port http://port:8080'));