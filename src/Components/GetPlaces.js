import dataPlaces from "../Data/data-places";
import React from "react";
import PlaceHtml from "./PlaceHtml";

export default function GetPlaces({
  isZooming,
  setCenter,
  setZooming,
  setCurrentZoom,
  setIsModal,
  localStoragePlaces,
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
    setCurrentZoom(`${e.currentTarget.id}`);
    setZooming(true);
  }

  function handleButtonClick() {
    setIsModal(true);
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
          <PlaceHtml
            place={place}
            isZooming={isZooming}
            handleClick={handleClick}
          />
        );
      })}
      {localStoragePlaces.map((place) => {
        return (
          <PlaceHtml
            place={place}
            isZooming={isZooming}
            handleClick={handleClick}
          />
        );
      })}
      <div
        className={
          isZooming ? "plus-button-container-zoomed" : "plus-button-container"
        }
      >
        <button
          className="plus-button plus-button--large"
          onClick={() => handleButtonClick()}
        ></button>
      </div>
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
