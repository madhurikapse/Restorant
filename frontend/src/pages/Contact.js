import React, { useState } from "react";
import "../style/Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "917875636301"; // Suraj Karle's WhatsApp number
    const text = `Hello, my name is ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      <div className="contact-content">
        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit">Send Message</button>
        </form>

        {/* Google Map */}
        <div className="map-container">
          <iframe
            title="Hotel Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.240906956766!2d73.4015458!3d18.964965199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7f930872f8f59%3A0x1ef651b820c3c7e1!2sThe%20Purvas%20Farm%20and%20Resort!5e0!3m2!1sen!2sin!4v1751112983011!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Address Section */}
      <div className="contact-info">
        <h2>Hotel Address</h2>
        <p>
          At - Vanjarwadi<br />
          Post - Gulwadi<br />
          Tal - Karjat<br />
          Dist - Raigad
        </p>
        <p>Email: purvaresort@gmail.com</p>
        <p>Phone: +91 7875636301 (Suraj Karle)</p>
        <p>
          WhatsApp:{" "}
          <a
            href="https://wa.me/917875636301"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat with us on WhatsApp
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
