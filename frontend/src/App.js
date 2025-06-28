import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Rooms from "./pages/Rooms";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/contact" element={<Contact />} />
      <Route path="/booking" element={<Booking/>} />
      </Routes>
    </Router>
  );
}

export default App;
