import React, { useState } from "react";
import "../style/rooms.css";

const rooms = [
  {
    type: "Front view",
    image: "/assets/new1.jpg",
    description: "Spacious room with multiple beds ideal for groups or families.",
    amenities: ["Wi-Fi", "TV", "24x7 Room Service"],
   
  },
  {
    type: "Multi Family Room",
    image: "/assets/new2.jpg",
    description: "Perfect for large groups with relaxing interiors.",
    amenities: ["Wi-Fi", "TV", "24x7 Room Service"],
 
  },
  {
    type: "Multi Bed Room",
    image: "/assets/new3.jpg",
    description: "Comfortable room with cozy lighting and premium linen.",
    amenities: ["Wi-Fi", "TV", "24x7 Room Service"],
   
  },
  {
    type: "Deluxe Room",
    image: "/assets/room1.jpg",
    description: "Spacious deluxe room with king-size bed and balcony view.",
    amenities: ["Wi-Fi", "Air Conditioning", "TV", "Mini Fridge"],
   
  },
  {
    type: "Suite Room",
    image: "/assets/room2.jpg",
    description: "Premium suite with living area, bathtub and scenic view.",
    amenities: ["Wi-Fi", "Bathtub", "Mini Bar", "Balcony View"],
   
  },
  {
    type: "Bathroom View",
    image: "/assets/bathrooms.jpg",
    description: "Modern bathroom facilities with hot water and essentials.",
    amenities: ["Shower", "Toiletries", "Clean Towels"],
    
  },
  {
    type: "Luxury Bathroom",
    image: "/assets/bathroom1.jpg",
    description: "Premium bathroom area with designer fittings.",
    amenities: ["Hot Water", "Toiletries", "Modern Decor"],

  },
  {
    type: "Multi Bed Room",
    image: "/assets/room5.jpg",
    description: "Ideal for backpackers or budget travellers.",
    amenities: ["Wi-Fi", "TV", "Room Service"],
   
  },
  {
    type: "Luxury Bathroom",
    image: "/assets/bathroom3.jpg",
    description: "Premium bathroom area with designer fittings.",
    amenities: ["Hot Water", "Toiletries", "Modern Decor"],

  },
  {
    type: "Family Room",
    image: "/assets/room6.jpg",
    description: "Large family-friendly room with extra space and comfort.",
    amenities: ["Wi-Fi", "TV", "Extra Bed", "24x7 Service"],
  
  },
  // ... add remaining
];

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const openModal = (room) => setSelectedRoom(room);
  const closeModal = () => setSelectedRoom(null);

  return (
    <div className="rooms-container">
      <h1>Our Rooms</h1>
      <div className="rooms-grid">
        {rooms.map((room, index) => (
          <div className="room-card" key={index}>
            <img
              src={room.image}
              alt={room.type}
              className="room-image"
              onClick={() => openModal(room)}
            />
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

      {/* Modal */}
      {selectedRoom && (
        <div className="modal" onClick={closeModal}>
          <span className="modal-close">&times;</span>
          <img src={selectedRoom.image} alt={selectedRoom.type} />
          <div className="modal-caption">
            <h2>{selectedRoom.type}</h2>
            <p>{selectedRoom.description}</p>
            {selectedRoom.price && <p><strong>Price:</strong> {selectedRoom.price}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Rooms;
