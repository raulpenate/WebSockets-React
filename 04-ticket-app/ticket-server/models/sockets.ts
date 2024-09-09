class Sockets {
  private io: any;

  constructor(io) {
    this.io = io;

    this.socketEvents();
  }

  socketEvents(): void {
    this.io.on("connection", (socket) => {
      socket.on("msg-to-server", (data) => {
        console.log(data);
        this.io.emit("msg-from-server");
      });
    });
  }
}

module.exports = Sockets;
