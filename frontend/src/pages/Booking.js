import React, { useState } from "react";
import "../style/Booking.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const [lastBooking, setLastBooking] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendWhatsAppMessage = (booking) => {
    const message = `*New Booking Received!*\n
Name: ${booking.name}\n
Email: ${booking.email}\n
Phone: ${booking.phone}\n
Room: ${booking.roomType}\n
Guests: ${booking.guests}\n
Check-in: ${booking.checkin}\n
Check-out: ${booking.checkout}`;


    const phoneNumber = "917875636301"; // Replace with Owner's WhatsApp Number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank"); // Open WhatsApp chat in new tab
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
        toast.success("🎉 Booking submitted successfully!");
        setLastBooking(formData);
        sendWhatsAppMessage(formData);  // Send WhatsApp Message to Owner

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
        toast.error("❌ Booking failed!");
      }
    } catch (err) {
      toast.error("⚠️ Error submitting booking!");
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

      <ToastContainer position="top-center" />

      {lastBooking && (
        <div className="booking-summary">
          <h3>✅ Booking Summary</h3>
          <p><strong>Name:</strong> {lastBooking.name}</p>
          <p><strong>Room:</strong> {lastBooking.roomType}</p>
          <p><strong>Guests:</strong> {lastBooking.guests}</p>
          <p><strong>Check-in:</strong> {lastBooking.checkin}</p>
          <p><strong>Check-out:</strong> {lastBooking.checkout}</p>
          <p>📧 Confirmation sent to <strong>{lastBooking.email}</strong></p>
        </div>
      )}
    </div>
  );
};

export default Booking;
