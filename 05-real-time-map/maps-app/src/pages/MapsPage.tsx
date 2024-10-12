import "./MapsPage.css";
import { useMapbox } from "../hooks/useMapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { useContext, useEffect } from "react";
import { SocketContext } from "../context/SocketContext";
import { coords, MarkerCoords, MarkerMap } from "../types/mapTypes";

const initialPoint = {
  lng: -70.9,
  lat: 42.35,
  zoom: 9,
};

function MapsPage() {
  const {
    coords: { lng, lat, zoom },
    mapContainer,
    addMarker,
    newMarker$,
    markerMovement$,
    updatePosition,
  } = useMapbox(initialPoint);

  const { socket } = useContext(SocketContext);

  // Listen existing markers
  useEffect(() => {
    socket.on("active-marker", (markers: MarkerCoords) => {
      for (const key of Object.keys(markers)) {
        addMarker(markers[key], key);
      }
    });
  }, [socket]);

  // Emit new markers
  useEffect(() => {
    newMarker$.subscribe((marker) => {
      socket.emit("new-marker", marker);
    });
  }, [newMarker$, socket]);

  // Movement
  useEffect(() => {
    markerMovement$.subscribe((marker) => {
      socket.emit("update-marker", marker);
    });
  }, [markerMovement$, socket]);

  // Listen new marker
  useEffect(() => {
    socket.on("new-marker", (marker: coords) => {
      addMarker(marker, marker.id);
    });
  }, [socket]);

  // Move marker with sockets
  useEffect(() => {
    socket.on("update-marker", (marker: coords) => {
      console.log("este es", marker);
      updatePosition(marker);
    });
  }, [socket, updatePosition]);

  return (
    <>
      <div className="info">
        <span className="lng">Lng: {lng}</span>
        <span className="lat">Lat: {lat}</span>
        <span className="zoom">Zoom: {zoom}</span>
      </div>
      <div className="container">
        <div ref={mapContainer} className="map-container" />
      </div>
    </>
  );
}

export default MapsPage;
