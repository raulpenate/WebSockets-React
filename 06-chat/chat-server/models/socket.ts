import type { Socket } from "socket.io";

class Sockets {
  io: Socket;

  constructor(io: Socket) {
    this.io = io;

    this.socketEvents();
  }

  socketEvents(): void {
    this.io.on("connect", (socket: Socket) => {});
  }
}

export default Sockets;
