import type { Application } from "express";
import Sockets from "./socket";
import express from "express";
import http from "node:http";
import cors from "cors";
import { Server as socketio } from "socket.io";
import { PrismaClient } from "@prisma/client";

import { router as authRouter } from "../router/auth";
import { router as messagesRouter } from "../router/messages";

class Server {
  private app: Application;
  private port: string;
  private server: http.Server;
  private io: any;
  private prisma: PrismaClient;
  sockets: Sockets;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3000";
    this.server = http.createServer(this.app);
    this.io = new socketio(this.server, {});
    this.prisma = new PrismaClient();

    //stating sockets here instead
    this.sockets = new Sockets(this.io);
    this.prisma = new PrismaClient();
  }

  private middlewares() {
    this.app.use(
      cors()
      // {origin: "http://localhost:5173",}
    );

    //Parse body
    this.app.use(express.json());

    this.app.use("/api/login", authRouter);
    this.app.use("/api/messages", messagesRouter);
  }

  public execute() {
    this.middlewares();

    this.server.listen(this.port, async () => {
      try {
        await this.prisma.$connect();
        console.log("Database connected!");
        console.log(`http://localhost:${this.port}`);
      } catch (error) {
        console.error("Database failed: ", error);
        //process.exit(1);
      }
    });
  }
}

export default Server;
