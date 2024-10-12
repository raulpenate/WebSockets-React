import type { MarkerMap, Marker } from "../interfaces/marker.interface";

export class Markers {
  activeMarkers: MarkerMap;

  constructor() {
    this.activeMarkers = {};
  }

  addMarker(marker: Marker) {
    const existingMarker = this.activeMarkers[marker.id];

    if (this.markerAlreadyExist(marker, existingMarker)) {
      return;
    }

    this.activeMarkers[marker.id] = marker;
    return marker;
  }

  deleteMarker(id: number) {
    delete this.activeMarkers[id];
  }

  updateMarker(marker: Marker) {
    this.activeMarkers[marker.id] = marker;
  }

  private markerAlreadyExist(marker: Marker, existingMarker: Marker) {
    return existingMarker
      ? existingMarker.lat === marker.lat && existingMarker.lng === marker.lng
      : false;
  }
}
