import React from "react";
import "./App.css";

export default function Images(props) {
  console.log("Hello from images", props.images);

  if (props.images) {
    return (
      <div className="container about pt-3">
        <div className="row">
          {props.images.photos.map(function (image, index) {
            return (
              <div className="col-4" key={index}>
                <a href={image.url} target="_blank" rel="noreferrer">
                  <img
                    src={image.src.landscape}
                    className="img-fluid photos"
                    alt={image.alt}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
