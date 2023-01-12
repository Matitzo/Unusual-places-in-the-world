import "./App.css";
import React from "react";
import GetPlaces from "./Components/GetPlaces";
import GetLinks from "./Components/GetLinks";
import GetMap from "./Components/GetMap";

function App() {
  const [isZooming, setZooming] = React.useState(false);
  const [center, setCenter] = React.useState([[0, 0], 1]);
  const [currentZoom, setCurrentZoom] = React.useState("");

  React.useEffect(() => {
    isZooming && scrollTo();
  }, [isZooming]);

  React.useEffect(() => {
    if (isZooming) {
      window.addEventListener("scroll", isInView);
    }

    return function cleanupListener() {
      window.removeEventListener("scroll", isInView);
    };
  }, [isZooming, currentZoom]);

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
      <div className="intro-img"></div>
      <article>
        <section className="sections-intro">
          <h1>Unusual places in the world.</h1>
          <h3>A website aimed at tourists who think they've seen it all.</h3>
          <p className="author-date">
            <span>Mateusz Czyrzniak</span> <br />
            2023 January 5
          </p>
        </section>
        <section>
          <p>
            There are many beautiful and surprising places on our planet:
            waterfalls, ancient cities or mighty mountains. The map below shows
            15 locations with things that would seem out of this world, and on
            top of that, all of them are works of nature (although man must have
            helped a little in creating some of them).
          </p>
        </section>
        <section className="sections-map">
          <GetMap center={center} />
          <GetPlaces
            isZooming={isZooming}
            setCenter={setCenter}
            setZooming={setZooming}
            setCurrentZoom={setCurrentZoom}
          />
        </section>
        <div className="separator-diamonds">
          <p>◆ ◆ ◆</p>
        </div>
        <section className="sections-links">
          <p>Below are short videos of some of these amazing places.</p>
          <GetLinks />
        </section>
        <div className="separator-diamonds">
          <p>◆ ◆ ◆</p>
        </div>
        <section className="sections-film">
          <p>
            Of course, there are many more remarkable places in the world. The
            video below shows another 10, the existence of which is sometimes
            hard to believe: 3 neighboring lakes each of a different color or a
            sea cut into 2 parts by a tiny strip of land.
          </p>
          <div className="sections-film-movie">
            <iframe
              width="100%"
              height="90%"
              src="https://www.youtube.com/embed/CAExWKYx_bg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <p className="sections-film-movie-title">
              10 Real Places On Earth That Seem Scientifically Impossible
            </p>
          </div>
          <p>
            For those determined to embark on a tour now, the button below will
            redirect to a page with cheap flights and accommodations.
          </p>
          <a className="link-btn" href="">
            Explore!
          </a>
        </section>
      </article>
    </main>
  );
}

export default App;
