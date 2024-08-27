const BandList = require("./band-list");


class Sockets {

    constructor( io ) {

        this.io = io;

        this.bandList = new BandList();

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

          console.log('Cliente conectado');

          // Emit to connected client all bands
          socket.emit('band-list', this.bandList.getBands());
        });
    }


}


module.exports = Sockets;