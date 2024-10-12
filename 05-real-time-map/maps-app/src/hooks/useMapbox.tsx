import mapboxgl, { Marker } from "mapbox-gl";
import { useCallback, useEffect, useRef, useState } from "react";
import { v4 } from "uuid";
import type { MarkerMap, coords } from "../types/mapTypes";
import { Subject } from "rxjs";

export const useMapbox = (initialPoint: coords) => {
  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY;
  const mapContainer = useRef(null);
  const markers = useRef<MarkerMap>({});
  const map = useRef<mapboxgl.Map | null>(null);
  const [coords, setCoords] = useState<coords>(initialPoint);

  //RXJS
  const markerMovement = useRef(new Subject());
  const newMarker = useRef(new Subject());

  const addMarker = useCallback(
    (ev: mapboxgl.MapMouseEvent | coords, id?: string) => {
      if (map.current) {
        const { lng, lat } = "lngLat" in ev ? ev.lngLat : ev;

        const marker = new Marker();

        marker.setLngLat([lng, lat]).addTo(map.current).setDraggable(true);
        marker.id = id ?? v4();
        markers.current[marker.id] = marker;

        if (!id) {
          newMarker.current.next({
            id: marker.id,
            lng,
            lat,
          });
        }

        marker.on("drag", ({ target }) => {
          const coord = target.getLngLat();

          if (coord) {
            const { id } = target;
            const { lng, lat } = coord;
            markerMovement.current.next({
              id,
              lng,
              lat,
            });
          }
        });
      }
    },
    []
  );

  const updatePosition = useCallback(({ id, lng, lat }: coords) => {
    console.log("data: ", markers.current[id!])
    markers.current[id!].setLngLat([lng, lat]);
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
    newMarker$: newMarker.current,
    markerMovement$: markerMovement.current,
    updatePosition,
  };
};
