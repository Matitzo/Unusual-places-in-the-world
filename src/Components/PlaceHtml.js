export default function PlaceHtml({ place, isZooming, handleClick }) {
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
      <img
        loading="lazy"
        className={
          isZooming
            ? "sections-map-places-place-img-zoomed"
            : "sections-map-places-place-img"
        }
        src={place.img}
        style={{}}
      ></img>
      <div className={isZooming ? "sections-map-places-place-desc-zoomed" : ""}>
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
}
