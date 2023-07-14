import { Marker, Popup } from "react-leaflet";

export default function GetMarker({ place, handleClick, popupElRef }) {
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
}
