const express = require("express");
const path = require("path");
const server = require("http");
const socketio = require("socket.io");
const Sockets = require("./sockets")
const cors = require("cors")

class Server {
  constructor() {
    // Express server
    this.app = express();
    this.port = process.env.PORT;

    // http server
    this.server = server.createServer(this.app);

    // configs sockets
    this.io = socketio(this.server, {
      /*confings*/
    });
  }

  configSockets(){
    new Sockets( this.io );
  }

  middlewares() {
    // Public directory
    this.app.use(express.static(path.resolve(__dirname,'../public')));

    // CORS
    this.app.use(cors());
  }

  execute() {
    // start middlewares
    this.middlewares();

    //start sockets
    this.configSockets();

    // start server
    this.server.listen(this.port, () => {
      console.log(`http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
