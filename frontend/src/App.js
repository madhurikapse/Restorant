import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Rooms from "./pages/Rooms";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import Footer from "./pages/Footer";
import Instagram from "./pages/Instagram";
import Vedio from "./pages/Vedio"
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Gallery />
              <Vedio/>
              <Rooms />
              <Contact />
              <Booking />
              <Instagram/>
            </>
          }
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Vedio" element={<Vedio/>} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
