import { Application } from "express";

const express = require("express");
const http = require("http");
const { Server: socketio } = require("socket.io");
const cors = require("cors");
const Sockets = require('./sockets')

class Server {
  private app: Application;
  private port: string;
  private server: any;
  private io: any;

  private constructor() {
    this.app = express();
    this.port = process.env.PORT!;
    this.server = http.createServer(this.app);
    this.io = new socketio(this.server, {});
  }

  private configSockets() {
    new Sockets(this.io);
  }

  private middlewares() {
    this.app.use(cors());
  }

  public execute() {
    this.middlewares();

    this.configSockets();

    this.server.listen(this.port, () => {
      [console.log(`http://localhost:${this.port}`)];
    });
  }
}

module.exports = Server;
