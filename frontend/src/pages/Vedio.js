import React from "react";
import "../style/Videos.css";

const videos = [
  {
    src: "/assets/vedio1.mp4",
    title: "Swimming Pool View",
  },
  {
    src: "/assets/vedio2.mp4",
    title: "Pool Enjoyment with Family",
  },
  {
    src: "/assets/vedio3.mp4",
    title: "Diwali Night Celebration",
  },
  {
    src: "/assets/vedio4.mp4",
    title: "Resort Entrance Tour",
  },
];

const Videos = () => {
  return (
    <div className="videos-container">
      <h1>Our Resort Videos</h1>
      <div className="video-grid">
        {videos.map((video, index) => (
          <div className="video-card" key={index}>
            <video controls>
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3>{video.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
