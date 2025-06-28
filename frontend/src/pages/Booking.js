import React, { useState } from "react";
import "../style/Booking.css";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkin: "",
    checkout: "",
    guests: 1,
    roomType: "Deluxe Room",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Booking submitted successfully!");
        // Clear form after submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          checkin: "",
          checkout: "",
          guests: 1,
          roomType: "Deluxe Room",
        });
      } else {
        alert("Booking failed!");
      }
    } catch (err) {
      alert("Error submitting booking!");
      console.error(err);
    }
  };

  return (
    <div className="booking-container">
      <h1>Book Your Stay</h1>
      <form className="booking-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          onChange={handleChange}
          value={formData.name}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          onChange={handleChange}
          value={formData.phone}
        />
        <div className="date-fields">
          <label>Check-in:</label>
          <input
            type="date"
            name="checkin"
            required
            onChange={handleChange}
            value={formData.checkin}
          />
          <label>Check-out:</label>
          <input
            type="date"
            name="checkout"
            required
            onChange={handleChange}
            value={formData.checkout}
          />
        </div>
        <input
          type="number"
          name="guests"
          placeholder="No. of Guests"
          min="1"
          required
          onChange={handleChange}
          value={formData.guests}
        />
        <select
          name="roomType"
          required
          onChange={handleChange}
          value={formData.roomType}
        >
          <option value="Deluxe Room">Deluxe Room</option>
          <option value="Suite Room">Suite Room</option>
          <option value="Standard Room">Standard Room</option>
        </select>
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default Booking;
