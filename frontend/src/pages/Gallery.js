import React, { useState } from "react";
import "../style/Gallery.css";

const images = [
  "/assets/new3.jpg",
  "/assets/new1.jpg",
  "/assets/new2.jpg",
  "/assets/room1.jpg",
  "/assets/room2.jpg",
  "/assets/room5.jpg",
  "/assets/room6.jpg",
  "/assets/room7.jpg",
  "/assets/room8.jpg",
  "/assets/room9.jpg",
  "/assets/dinner.jpg",
  "/assets/dinner2.jpg",
  "/assets/bathrooms.jpg",
  "/assets/garden1.jpg",
  "/assets/garden2.jpg",
  "/assets/garden3.jpg",
  "/assets/garden4.jpg",
  "/assets/garden5.jpg",
  "/assets/garden6.jpg",
  "/assets/pool1.jpg",
  "/assets/pool3.jpg",
  "/assets/pool4.jpg",
  "/assets/pool5.jpg",
  "/assets/bathrooms.jpg",
  "/assets/bathroom1.jpg",
  "/assets/bathroom3.jpg",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (img) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <h1>Hotel Photo Gallery</h1>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-item" key={index} onClick={() => openModal(img)}>
            <img src={img} alt={`gallery-${index}`} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="modal-close">&times;</span>
          <img src={selectedImage} alt="Enlarged view" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
