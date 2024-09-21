import "./MapsPage.css";
import { useMapbox } from "../hooks/useMapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect } from "react";

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
  } = useMapbox(initialPoint);

  useEffect(() => {
    newMarker$.subscribe((marker) => {
      console.log("marker", marker);
    });
  }, [newMarker$]);

  useEffect(() => {
    markerMovement$.subscribe((movement) => {
      console.log("drag", movement);
    });
  }, [markerMovement$]);

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
