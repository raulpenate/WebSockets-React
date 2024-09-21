import mapboxgl, { Marker } from "mapbox-gl";
import { useCallback, useEffect, useRef, useState } from "react";
import { v4 } from "uuid";

type coords = {
  lng: number;
  lat: number;
  zoom: number;
};

type MarkerMap = {
  [key: string]: Marker;
};

export const useMapbox = (initialPoint: coords) => {
  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY;
  const mapContainer = useRef(null);
  const markers = useRef<MarkerMap>({});
  const map = useRef<mapboxgl.Map | null>(null);
  const [coords, setCoords] = useState<coords>(initialPoint);

  const addMarker = useCallback((ev: mapboxgl.MapMouseEvent) => {
    if (map.current) {
      const { lng, lat } = ev.lngLat;

      const marker = new Marker();

      marker.setLngLat([lng, lat]).addTo(map.current).setDraggable(true);
      marker.id = v4();
      markers.current[marker.id] = marker;

      marker.on("drag", ({ target }) => {
        const { id } = target;
        console.log(id);
      });
    }
  }, []);

  useEffect(() => {
    if (map.current || !mapContainer.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [coords.lng, coords.lat],
      zoom: coords.zoom,
    });
  }, [coords]);

  useEffect(() => {
    map.current?.on("load", () => {
      map.current?.resize();
    });
  }, []);

  // When map moves
  useEffect(() => {
    const handleMove = () => {
      const center = map.current?.getCenter();
      const zoom = map.current?.getZoom();

      if (center && zoom) {
        const { lng, lat } = center;
        setCoords({
          lng: +lng.toFixed(4),
          lat: +lat.toFixed(4),
          zoom: +zoom.toFixed(2),
        });
      }
    };

    map.current?.on("move", handleMove);
  }, []);

  useEffect(() => {
    map.current?.on("click", addMarker);
    return () => {
      map.current?.off("click", addMarker);
    };
  }, [addMarker]);

  return {
    coords,
    mapContainer,
    addMarker,
  };
};