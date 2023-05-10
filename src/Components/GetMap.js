import { useMap, MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import dataPlaces from "../Data/data-places";
import React from "react";
import { useRef } from "react";

export default function GetMap({
  center,
  isZooming,
  setCenter,
  setZooming,
  setCurrentZoom,
}) {
  const popupElRef = useRef(null);

  function handleClick(e) {
    popupElRef.current.close();
    document.getElementsByClassName("sections-map")[0].style.animation =
      "fadein 2s";
    document.body.style.animation = "";
    setCenter([
      [
        parseFloat(e.currentTarget.dataset.coord.split(",")[0]),
        parseFloat(e.currentTarget.dataset.coord.split(",")[1]),
      ],
      6,
    ]);
    setZooming(true);
    setCurrentZoom(`${e.currentTarget.id.split(" ")[0]}`);
  }

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
      scrollWheelZoom={true}
    >
      <SetMapView />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {dataPlaces.map((place) => {
        return (
          <Marker position={place.coordinates}>
            <Popup ref={popupElRef}>
              <div
                className="sections-map-popup-div"
                id={place.id + " map"}
                data-coord={place.coordinates}
                onClick={(e) => {
                  handleClick(e);
                }}
              >
                {place.title}
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
