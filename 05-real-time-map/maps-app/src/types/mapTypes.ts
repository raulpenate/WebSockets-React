import type { Marker } from "mapbox-gl";

export type coords = {
  id?: string;
  lng: number;
  lat: number;
  zoom: number;
};

export type MarkerMap = {
  [id: string]: Marker;
};

export type MarkerCoords = {
  [id: string]: coords;
};
