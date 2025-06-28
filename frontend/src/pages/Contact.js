import React from "react";
import "../style/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-content">
        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>

        {/* Google Map */}
        <div className="map-container">
          <iframe
            title="Hotel Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.8601370283226!2d-73.98513068459565!3d40.75889607932651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c2a45713%3A0x2adfdf1b5d93dbee!2sTimes%20Square!5e0!3m2!1sen!2sin!4v1617182618695!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Address Section */}
      <div className="contact-info">
        <h2>Hotel Address</h2>
        <p>Rim Luxury Hotel, MG Road, Pune, Maharashtra, India</p>
        <p>Email: contact@rimhotel.com</p>
        <p>Phone: +91-9876543210</p>
      </div>
    </div>
  );
};

export default Contact;
