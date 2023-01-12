import React from "react";
import dataLinks from "../data-links";

export default function GetLinks() {
  return (
    <div>
      {dataLinks.map((link) => {
        return (
          <a target="blank" href={link.url} className="sections-links-link">
            <div>
              <h4>{link.title}</h4>
              <p>{link.place}</p>
              <p className="sections-links-link-url">{link.url}</p>
            </div>
            <div
              className="sections-links-link-image"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + link.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </a>
        );
      })}
    </div>
  );
}
