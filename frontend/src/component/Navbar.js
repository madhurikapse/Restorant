import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Rim Hotel</h2>
      <div className="nav-links">
        <NavLink to="/" exact="true" activeclassname="active">
          Home
        </NavLink>
        <NavLink to="/gallery" activeclassname="active">
          Gallery
        </NavLink>
        <NavLink to="/rooms" activeclassname="active">
          Rooms
        </NavLink>
        <NavLink to="/contact" activeclassname="active">
          Contact
        </NavLink>
        <NavLink to="/booking" activeclassname="active">
  Booking
</NavLink>

      </div>
    </nav>
  );
};

export default Navbar;
