import React from "react";
import "../style/Gallery.css";

const images = [
  "/assets/room1.jpg",
  "/assets/lobby.jpg",
  "/assets/pool.jpg",
  "/assets/restaurant.jpg",
  "/assets/hall.jpg",
  "/assets/night-view.jpg",
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1>Hotel Photo Gallery</h1>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt={`gallery-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
