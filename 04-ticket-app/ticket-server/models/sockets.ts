import { Socket } from "socket.io";
import TicketList from "./ticket-list";
import { iTicket } from "../types/ticket";

class Sockets {
  io: Socket;
  ticketList: any;

  constructor(io: Socket) {
    this.io = io;

    this.ticketList = new TicketList();

    this.socketEvents();
  }

  socketEvents(): void {
    this.io.on("connection", (socket: any) => {
      socket.on(
        "request-ticket",
        (_: never, callback: (ticket: iTicket) => iTicket) => {
          const newTicket: iTicket = this.ticketList.createTicket();
          callback(newTicket);
        }
      );

      socket.on(
        "next-desktop-ticket",
        ({ agent, desktop }: any, callback: any) => {
          const yourTicket = this.ticketList.assignTicket(agent, desktop);
          callback(yourTicket);

          this.io.emit("assigned-tickets", this.ticketList.last13);
        }
      );
    });
  }
}

export default Sockets;
