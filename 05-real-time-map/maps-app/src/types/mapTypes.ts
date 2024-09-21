import type { Marker } from "mapbox-gl";

export type coords = {
  lng: number;
  lat: number;
  zoom: number;
};

export type MarkerMap = {
  [key: string]: Marker;
};
