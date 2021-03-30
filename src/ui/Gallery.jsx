import React from "react";
import hotel1 from "../img/hotel-1.jpg";
import hotel2 from "../img/hotel-2.jpg";
import hotel3 from "../img/hotel-3.jpg";

const Gallery = () => (
  <div className="gallery">
    <figure className="gallery__item">
      <img
        src={hotel1}
        // src="img/hotel-1.jpg"
        alt="Img of hotel 1"
        className="gallery__photo"
      />
    </figure>
    <figure className="gallery__item">
      <img src={hotel2} alt="Img of hotel 2" className="gallery__photo" />
    </figure>
    <figure className="gallery__item">
      <img src={hotel3} alt="Img of hotel 3" className="gallery__photo" />
    </figure>
  </div>
);

export default Gallery;
