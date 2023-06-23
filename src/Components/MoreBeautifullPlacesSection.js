export default function MoreBeautifullPlacesSection() {
  return (
    <section className="sections-film">
      <p>
        Of course, there are many more remarkable places in the world. The video
        below shows another 10, the existence of which is sometimes hard to
        believe: 3 neighboring lakes each of a different color or a sea cut into
        2 parts by a tiny strip of land.
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
  );
}
