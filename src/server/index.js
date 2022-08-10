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
const http = require("http");
const { stringify } = require("querystring");
const { cursorTo } = require("readline");
//4.
const WebSocketServer = require("websocket").server;
// 6.1
let connection = null;

//2.
const httpserver = http.createServer((req, res) => {
  console.log("we have received response");
});

//5. handshake part
const websocket = new WebSocketServer({
  httpServer: httpserver,
});

//6.
websocket.on("request", (request) => {
  //6.1 we are accepting the connection ...
  connection = request.accept(null, request.origin);

  //7.
  connection.on("open", () => console.log("Opened"));
  //7.1
  connection.on("close", () => {
    console.log("Server dead :) ");
    clearInterval(shoesMessage);
  });
  //7.2
  connection.on("message", (message) => {
    console.log(`Show the message ${message.utf8Data}`);
  });

  //9,
  let shoesMessage = setInterval(sendEvery5Sec, 5000);
});

//3.
httpserver.listen(8080, () =>
  console.log("Server is listening on port 8080 :)")
);

//8.
function sendEvery5Sec() {
  const yourOrder = makeOrder();
  // connection.send(
  //   `Random Shoes type to the client every five seconds ... ${stringify(
  //     yourOrder
  //   )}`
  // );
  console.log("porudzbina",yourOrder);
  connection.send(yourOrder);
}
//9.
function makeOrder() {
  const customer = customerFirstAndLast();
  const [firstN, lastN] = customer.split(" ");
  const productNameAndBrand = productName();
  const productB = productNameAndBrand.shoesBrand;
  const productN = productNameAndBrand.shoesName;


  const order = {
    productName: productN,
    productBrand: productB,
    productColor: productColor(),
    productSize: productSize(),
    customerName: firstN,
    customerLastName: lastN,
  };
  return order;
}

function productName() {
  const shoes = [{
    shoesName: "Nike Jordan 6 Rings",
    shoesBrand: "Nike"
  },
  {
    shoesName: "Adidas SUPERSTAR",
    shoesBrand: "Adidas"
  },
  {
    shoesName: "Nike Air Max 95 ultra",
    shoesBrand: "Nike"
  },
  {
    shoesName:  "Nike Air Max Genome",
    shoesBrand: "Nike"
  },
  {
    shoesName: "Nike Air Max 90 Surplus",
    shoesBrand: "Nike"
  },
  {
    shoesName: "Nike Air Max Pre-Day",
    shoesBrand: "Nike"
  },
  {
    shoesName: "Nike Patike Jordan MA2",
    shoesBrand: "Nike"
  },
  {
    shoesName: "Nike Air Force 1 React",
    shoesBrand: "Nike"
  },
  {
    shoesName: "New Balance 329",
    shoesBrand: "New Balance"
  },
  {
    shoesName: "New Balance 5740",
    shoesBrand: "New Balance"
  }
    
    
    
   
    
    
    
    
    
    
  ];

  return shoes[Math.floor(Math.random() * 11)];
}

function productColor() {
  const shoesColor = [
    "Black",
    "White",
    "Pink",
    "Blue",
    "Green",
    "Red",
    "Yellow",
  ];

  return shoesColor[Math.floor(Math.random() * 7)];
}

function productSize() {
  const shoesSize = [
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
  ];

  return shoesSize[Math.floor(Math.random() * 11)];
}

function customerFirstAndLast() {
  const firstAndLastName = [
    "Milos Markovic",
    "Marko Milic",
    "Petar Petrovic",
    "Predrag Ilic",
    "Dalibor Bogdanovic",
    "Ana Kecman",
    "Uros Banovic",
    "Aleksandra Bojanic",
    "Milena Petorvic",
    "Petar Ilic",
  ];

  return firstAndLastName[Math.floor(Math.random() * 10)];
}
