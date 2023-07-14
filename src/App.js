import React from "react";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import SectionSeparator from "./Components/SectionSeparator";
import YouTubeLinksSection from "./Components/YouTubeLinkSection";
import MoreBeautifullPlacesSection from "./Components/MoreBeautifullPlacesSection";
import IntroImg from "./Components/IntroImg";
import GetPlaces from "./Components/GetPlaces";
import GetMap from "./Components/GetMap";
import AddPlaceForm from "./Components/AddPlaceForm";
import "./App.css";

function App() {
  const [isZooming, setZooming] = React.useState(false);
  const [changeZoomOnMap, setChangeZoomOnMap] = React.useState(false);
  const [center, setCenter] = React.useState([[0, 0], 1]);
  const [currentZoom, setCurrentZoom] = React.useState("");
  const [isModal, setIsModal] = React.useState(false);
  const [isErrorMsg, setIsErrorMsg] = React.useState(false);
  const [localStoragePlaces, setLocalStoragePlaces] = React.useState(
    localStorage.getItem("places")
      ? JSON.parse(localStorage.getItem("places"))
      : []
  );

  React.useEffect(() => {
    isZooming && scrollTo();
  }, [isZooming, changeZoomOnMap]);

  React.useEffect(() => {
    if (isZooming) {
      window.addEventListener("scroll", isInView);
    }

    return function cleanupListener() {
      window.removeEventListener("scroll", isInView);
    };
  }, [isZooming, currentZoom]);

  React.useEffect(() => {
    try {
      localStorage.setItem("places", JSON.stringify(localStoragePlaces));
      setIsErrorMsg(false);
      setIsModal(false);
    } catch (e) {
      setIsErrorMsg(true);
    }
  }, [localStoragePlaces]);

  function scrollTo() {
    if (isZooming && currentZoom !== "") {
      document.getElementById(`${currentZoom}`).scrollIntoView({
        behavior: "auto",
        block: document.documentElement.clientWidth < 950 ? "end" : "center",
        inline: "end",
      });
    }
  }

  function isInView() {
    {
      const places = document.getElementsByClassName(
        "sections-map-places-place-zoomed"
      );

      let placeToZoom = {};

      for (let place of places) {
        let rect = place.getBoundingClientRect();
        const isInViewport =
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth);

        if (isInViewport) {
          placeToZoom = place;
        }
      }

      if (placeToZoom.id !== currentZoom) {
        handleCenter(placeToZoom);
      }
    }
  }

  function handleCenter(place) {
    setCenter([
      [
        parseFloat(place.dataset.coord.split(",")[0]),
        parseFloat(place.dataset.coord.split(",")[1]),
      ],
      6,
    ]);
    setCurrentZoom(place.id);
  }

  return (
    <main>
      <AddPlaceForm
        isModal={isModal}
        setIsModal={setIsModal}
        id={localStoragePlaces.length}
        setLocalStoragePlaces={setLocalStoragePlaces}
        isErrorMsg={isErrorMsg}
      />
      <IntroImg />
      <article>
        <Header />
        <Intro />
        <section className="sections-map">
          <GetMap
            center={center}
            setCenter={setCenter}
            setZooming={setZooming}
            setCurrentZoom={setCurrentZoom}
            setChangeZoomOnMap={setChangeZoomOnMap}
            localStoragePlaces={localStoragePlaces}
          />
          <GetPlaces
            isZooming={isZooming}
            setCenter={setCenter}
            setZooming={setZooming}
            setCurrentZoom={setCurrentZoom}
            setIsModal={setIsModal}
            localStoragePlaces={localStoragePlaces}
          />
        </section>
        <SectionSeparator />
        <YouTubeLinksSection />
        <SectionSeparator />
        <MoreBeautifullPlacesSection />
      </article>
    </main>
  );
}

export default App;
