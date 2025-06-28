import React from "react";
import "../style/rooms.css";

const rooms = [
  {
    type: "Deluxe Room",
    image: "/assets/deluxe.jpg",
    description: "Spacious room with king-size bed, balcony, and city view.",
    price: "₹3,999/night",
    amenities: ["Wi-Fi", "Air Conditioning", "TV", "Mini Fridge"],
  },
  {
    type: "Suite Room",
    image: "/assets/suite.jpg",
    description: "Luxury suite with living area, bathtub, and premium services.",
    price: "₹6,499/night",
    amenities: ["Wi-Fi", "Bathtub", "Mini Bar", "Balcony View"],
  },
  {
    type: "Standard Room",
    image: "/assets/standard.jpg",
    description: "Comfortable room ideal for solo or business travelers.",
    price: "₹2,499/night",
    amenities: ["Wi-Fi", "TV", "24x7 Room Service"],
  },
];

const Rooms = () => {
  return (
    <div className="rooms-container">
      <h1>Our Rooms</h1>
      <div className="rooms-grid">
        {rooms.map((room, index) => (
          <div className="room-card" key={index}>
            <img src={room.image} alt={room.type} className="room-image" />
            <h2>{room.type}</h2>
            <p>{room.description}</p>
            <ul className="amenities">
              {room.amenities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="price">{room.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
