import React, { useState } from 'react';
import '../style/Footer.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Api from '../AxiosConfig';

const Footer = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !email) {
      toast.error('Please fill in both your name and email address.');
      return;
    }

    try {
      const { data } = await Api.post('/subscribe', {
        firstName,
        email,
      });

      if (data.success) {
        toast.success('Thank you for your enquiry! We will get back to you shortly.');
        setFirstName('');
        setEmail('');

        const whatsappMessage = `📩 New Hotel Enquiry:\n👤 Name: ${firstName}\n📧 Email: ${email}`;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappURL = `https://wa.me/7875636301?text=${encodedMessage}`;
        window.open(whatsappURL, '_blank');
      } else {
        toast.error(data.message || 'Enquiry failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during enquiry:', error);
      toast.error('Something went wrong. Please try again later.');
    }
  };

  return (
    <footer className="footer">
      {/* Hotel Info Section */}
      <div className="footer-section hotel-info">
        <h3>📍 Contact Our Hotel</h3>
<p>
  <strong>Reception:</strong>{' '}
  <a href="tel:7875636301" className="footer-link">7875636301</a>
</p>
<p>
  <strong>Email:</strong>{' '}
  <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=purvaresort@gmail.com&su=Booking%20Enquiry"
  target="_blank"
  rel="noopener noreferrer"
  className="footer-link"
>
  purvaresort@gmail.com
</a>

</p>

        <p><strong>Address:</strong>At- vanjarwadi 
Post - Gulwadi
Tal- karjat
Dist- Raigad</p>
        <p><strong>Hours:</strong></p>
        <ul>
          <li>Mon - Fri: 8:00 AM – 8:00 PM</li>
          <li>Sat - Sun: 9:00 AM – 6:00 PM</li>
        </ul>
      </div>

      {/* Quick Links */}
      <div className="footer-section">
        <h3>Explore</h3>
        <ul>
          <li><a href="/rooms">Rooms & Suites</a></li>
          <li><a href="/dining">Dining</a></li>
          <li><a href="/spa">Spa & Wellness</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/events">Events & Weddings</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>

      {/* Enquiry Form */}
      <div className="footer-section">
        <h3>💬 Quick Enquiry</h3>
        <p>Planning your stay? Send us your contact and we’ll get in touch!</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            aria-label="Enter your name"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Enter your email"
          />
          <button type="submit">Send Enquiry</button>
        </form>

        <div className="social-media-box">
          <a href="https://wa.me/917875636301" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>

      <ToastContainer />
    </footer>
  );
};

export default Footer;
