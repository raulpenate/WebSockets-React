const BandList = require("./band-list");

class Sockets {
  constructor(io) {
    this.io = io;

    this.bandList = new BandList();

    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", (socket) => {
      console.log("Client connected");

      // Emit to connected client all bands
      socket.emit("band-list", this.bandList.getBands());

      // Vote band
      socket.on("vote-band", (id) => {
        this.bandList.increaseVotes(id);
        this.io.emit("band-list", this.bandList.getBands());
      });

      // Delete band
      socket.on("remove-band", (id) => {
        this.bandList.removeBand(id);
        this.io.emit("band-list", this.bandList.getBands());
      });

      // Rename band
      socket.on("rename-band", ({ id, name }) => {
        this.bandList.changeBandName(id, name);
        this.io.emit("band-list", this.bandList.getBands());
      });

      // Create band
      socket.on("create-band", ({name}) => {
        this.bandList.addBand(name);
        this.io.emit("band-list", this.bandList.getBands());
      });

      socket.on("connect_error", (err) => {
        // the reason of the error, for example "xhr poll error"
        console.log(err.message);
      
        // some additional description, for example the status code of the initial HTTP response
        console.log(err.description);
      
        // some additional context, for example the XMLHttpRequest object
        console.log(err.context);
      });
    });
  }
}

module.exports = Sockets;
