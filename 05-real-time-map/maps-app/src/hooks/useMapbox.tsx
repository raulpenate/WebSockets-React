import mapboxgl from "mapbox-gl";
import { useCallback, useEffect, useRef, useState } from "react";
import { v4 } from "uuid";

type coords = {
  lng: number;
  lat: number;
  zoom: number;
};

type MarkerMap = {
  [key: string]: newCustomMarker;
};

class newCustomMarker extends mapboxgl.Marker {
  id: string;

  constructor(options?: mapboxgl.MarkerOptions) {
    super(options);
    this.id = v4();
  }
}

export const useMapbox = (initialPoint: coords) => {
  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY;
  const mapContainer = useRef(null);
  const markers = useRef<MarkerMap>({});
  const map = useRef<mapboxgl.Map | null>(null);
  const [coords, setCoords] = useState<coords>(initialPoint);

  const addMarker = useCallback((ev: mapboxgl.MapMouseEvent) => {
    const { lng, lat } = ev.lngLat;

    const marker: mapboxgl.Marker = new newCustomMarker();

    marker.setLngLat([lng, lat]).addTo(map.current!).setDraggable(true);

    markers.current[(marker as newCustomMarker).id] = marker as newCustomMarker;

    console.log(markers);
  }, []);

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [coords.lng, coords.lat],
      zoom: coords.zoom,
    });
  }, []);

  useEffect(() => {
    map.current?.on("load", () => {
      map.current?.resize();
    });
  }, []);

  // When map moves
  useEffect(() => {
    map.current?.on("move", () => {
      const { lng, lat } = map.current?.getCenter()!;
      setCoords({
        lng: +lng.toFixed(4),
        lat: +lat!.toFixed(4),
        zoom: +(map.current?.getZoom()!).toFixed(2),
      });
    });
  }, []);

  useEffect(() => {
    map.current?.on("click", addMarker);
    return () => {
      map.current?.off("click", addMarker);
    };
  }, []);

  return {
    coords,
    mapContainer,
    addMarker
  };
};
