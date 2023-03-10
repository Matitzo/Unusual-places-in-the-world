import dataPlaces from "../data-places";
import React from "react";

export default function GetPlaces({
  isZooming,
  setCenter,
  setZooming,
  setCurrentZoom,
}) {
  function handleCloseZoom() {
    window.scrollTo(0, 650);
    document.getElementsByClassName("sections-map")[0].style.animation = "";
    document.body.style.animation = "fadein 2s";
    setCenter([[0, 0], 1]);
    setZooming(false);
  }

  function handleClick(e) {
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
    setCurrentZoom(`${e.currentTarget.id}`);
  }
  return (
    <div
      className={
        isZooming ? "sections-map-places-zoomed" : "sections-map-places"
      }
      id={isZooming ? "sections-map-places-zoomed" : "sections-map-places"}
    >
      {dataPlaces.map((place) => {
        return (
          <div
            className={
              isZooming
                ? "sections-map-places-place-zoomed"
                : "sections-map-places-place"
            }
            id={place.id}
            data-coord={place.coordinates}
            onClick={(e) => {
              !isZooming && handleClick(e);
            }}
          >
            <div
              className={
                isZooming
                  ? "sections-map-places-place-img-zoomed"
                  : "sections-map-places-place-img"
              }
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + place.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              className={
                isZooming ? "sections-map-places-place-desc-zoomed" : ""
              }
            >
              <h4
                className="sections-map-places-place-title"
                data-title={place.title}
              >
                {place.title}
              </h4>
              {isZooming && <p>{place.desc}</p>}
            </div>
          </div>
        );
      })}
      {isZooming && (
        <button
          className="sections-map-places-zoomed-btn"
          onClick={() => handleCloseZoom()}
        >
          X
        </button>
      )}
    </div>
  );
}
