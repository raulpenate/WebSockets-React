import { Application } from "express";
import Sockets from "./sockets";
import express from "express";
import http from "http";
import cors from "cors";
import { Server as socketio } from "socket.io";

class Server {
  private app: Application;
  private port: string;
  private server: any;
  private io: any;
  sockets: Sockets;

  constructor() {
    this.app = express();
    this.port = process.env.PORT!;
    this.server = http.createServer(this.app);
    this.io = new socketio(this.server, {});

    //stating sockets here instead
    this.sockets = new Sockets(this.io)
  }


  private middlewares() {
    this.app.use(
      cors({
        origin: "http://localhost:5173",
      })
    );

    //get last tickets
    this.app.get("/last", (req, res) => {
      res.json({
        ok: true,
        lastOnes: this.sockets.ticketList.last13
      });
    });
  }

  public execute() {
    this.middlewares();

    this.server.listen(this.port, () => {
      console.log(`http://localhost:${this.port}`);
    });
  }
}

export default Server;
