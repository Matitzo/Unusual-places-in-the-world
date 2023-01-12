import { useMap, MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import dataPlaces from "../data-places";
import React from "react";

export default function GetMap({ center }) {
  function SetMapView() {
    const map = useMap();
    map.setView(center[0], center[1]);
    return null;
  }

  return (
    <MapContainer
      id="map"
      center={center[0]}
      zoom={center[1]}
      scrollWheelZoom={false}
    >
      <SetMapView />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {dataPlaces.map((place) => {
        return (
          <Marker position={place.coordinates}>
            <Popup>{place.title}</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
