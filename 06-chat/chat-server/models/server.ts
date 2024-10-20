import type { Application } from "express";
import Sockets from "./socket";
import express from "express";
import http from "node:http";
import cors from "cors";
import { Server as socketio } from "socket.io";

class Server {
  private app: Application;
  private port: string;
  private server: http.Server;
  private io: any;
  sockets: Sockets;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3000';
    this.server = http.createServer(this.app);
    this.io = new socketio(this.server, {});

    //stating sockets here instead
    this.sockets = new Sockets(this.io);
  }

  private middlewares() {
    this.app.use(
      cors({
        origin: "http://localhost:5173",
      })
    );
  }

  public execute() {
    this.middlewares();

    this.server.listen(this.port, () => {
      console.log(`http://localhost:${this.port}`);
    });
  }
}

export default Server;
