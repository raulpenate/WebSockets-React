import type { Socket } from "socket.io";

class Sockets {
  io: Socket;

  constructor(io: Socket) {
    this.io = io;

    this.socketEvents();
  }

  socketEvents(): void {
    this.io.on("connect", (socket: Socket) => {
      // TODO: validate JWT
      // If token is not valid, disconnect

      // TODO: check if user is online

      // TODO: emit all connected users

      // TODO: Socket join, uid

      // TODO: listen when client sends a message
      // personal-message
      
      // TODO: disconnect
      // Mark db where the user disconnected

      // TODO: emit to all online users
    });
  }
}

export default Sockets;
