import React from "react";
import "../style/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Background video */}
      <video autoPlay muted loop className="video-bg">
        <source src="/assets/hotel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content */}
      <div className="overlay">
        <h1>Welcome to Purva Resort & Farmhouse</h1>
        <p>Escape to tranquility — comfort, elegance, and natural beauty await you.</p>

        {/* Main resort image */}
        <img src="/assets/main.jpg" alt="Main Resort View" className="main-image" />
      </div>

      {/* Additional Section with Heading */}
      <div className="over1">
        <h2 className="over1-heading">Discover Nature & Luxury Together</h2>
        <img src="/assets/dd.jpg" alt="Resort Garden View" className="main-image1" />
      </div>
    </div>
  );
};

export default Home;
