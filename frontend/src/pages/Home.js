import React from "react";
import "../style/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <video autoPlay muted loop className="video-bg">
        <source src="/assets/hotel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay">
        <img src="/assets/logo.png" alt="Hotel Logo" className="logo" />
        <h1>Welcome to Grand Luxury Hotel</h1>
        <p>Experience comfort, elegance, and personalized service</p>
      </div>
    </div>
  );
};

export default Home;
