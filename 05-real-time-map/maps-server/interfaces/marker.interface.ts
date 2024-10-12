export interface MarkerMap {
  [key: string]: Marker;
}

export interface Marker {
  id: number;
  lng: number;
  lat: number;
}
