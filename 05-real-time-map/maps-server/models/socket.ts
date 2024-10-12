import type { Socket } from "socket.io";
import type { Marker } from "../interfaces/marker.interface";
import { Markers } from "./markers";

class Sockets {
  io: Socket;
  markers: Markers;

  constructor(io: Socket) {
    this.io = io;

    this.markers = new Markers();

    this.socketEvents();
  }

  socketEvents(): void {
    this.io.on("connect", (socket: Socket) => {
      socket.emit("active-marker", this.markers.activeMarkers);

      socket.on("new-marker", (marker: Marker) => {
        this.markers.addMarker(marker);
        
        socket.broadcast.emit("new-marker", marker);
      });
      
      socket.on("update-marker", (marker) => {
        console.log(marker);
        this.markers.updateMarker(marker);
        socket.broadcast.emit("update-marker", marker);
      });
    });
  }
}

export default Sockets;
