import React from "react";
import "../style/Instagram.css";

const InstagramPage = () => {
  return (
    <div className="instagram-page">
      <div className="instagram-header">
        <h1>Follow Us on Instagram</h1>
        <p>@purvas_farm_and_resort</p>

        <a
          href="https://www.instagram.com/purvas_farm_and_resort?igsh=cHh2ZmUxeHhldDRo"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-button"
        >
          📸 Visit Our Instagram Profile
        </a>
      </div>

      <div className="highlight-section">
        <h2>Highlights from Our Resort</h2>
        <div className="highlight-grid">
          <img src="/assets/room6.jpg" alt="Deluxe Room" />
          <img src="/assets/garden3.jpg" alt="Garden View" />
          <img src="/assets/pool5.jpg" alt="Swimming Pool" />
          <img src="/assets/dinner.jpg" alt="Food & Dining" />
          <img src="/assets/new2.jpg" alt="Resort Entrance" />
          <img src="/assets/room9.jpg" alt="Multi-bed Room" />
        </div>
      </div>
    </div>
  );
};

export default InstagramPage;
