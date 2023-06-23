import React from "react";
import dataLinks from "../Data/data-links";

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
            <img
              className="sections-links-link-image"
              src={link.img}
              loading="lazy"
              style={{
                maxWidth: "100px",
                maxHaight: "75px",
              }}
            ></img>
          </a>
        );
      })}
    </div>
  );
}
