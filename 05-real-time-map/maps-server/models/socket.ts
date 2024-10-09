import { Socket } from "socket.io";
import TicketList from "./ticket-list";
import { iTicket } from "../types/ticket";

class Sockets {
  io: Socket;
  ticketList: any;

  constructor(io: Socket) {
    this.io = io;


    this.socketEvents();
  }

  socketEvents(): void {
    this.io.on("connection", (socket: any) => {
      
    });
  }
}

export default Sockets;