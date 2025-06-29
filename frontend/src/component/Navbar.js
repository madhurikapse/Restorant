import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/assets/Logo.jpeg" alt="Hotel Logo" />

      </div>
      <div className="nav-links">
        <NavLink to="/" exact activeClassName="active">Home</NavLink>
        <NavLink to="/gallery" activeClassName="active">Gallery</NavLink>
        <NavLink to="/rooms" activeClassName="active">Rooms</NavLink>
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        <NavLink to="/booking" activeClassName="active">Booking</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
