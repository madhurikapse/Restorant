import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/AdminDashboard.css";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  // Fetch all bookings from backend
  const fetchBookings = async () => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      alert("Unauthorized. Please login.");
      navigate("/admin/login");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/bookings", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        setBookings(data);
      } else {
        alert("Failed to fetch bookings");
      }
    } catch (err) {
      console.error("Error fetching bookings", err);
    }
  };

  // Delete a booking
  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this booking?");
    if (!confirm) return;

    try {
      const res = await fetch(`http://localhost:5000/api/bookings/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      });

      if (res.ok) {
        alert("Booking deleted");
        setBookings(bookings.filter((b) => b._id !== id));
      } else {
        alert("Failed to delete");
      }
    } catch (err) {
      console.error("Error deleting booking", err);
      alert("Server error");
    }
  };

  // Logout admin
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h2>📋 Admin Booking Dashboard</h2>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>

      {bookings.length === 0 ? (
        <p>No bookings yet</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Check-in</th>
              <th>Check-out</th>
              <th>Guests</th>
              <th>Room Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b._id}>
                <td>{b.name}</td>
                <td>{b.email}</td>
                <td>{new Date(b.checkin).toLocaleDateString()}</td>
                <td>{new Date(b.checkout).toLocaleDateString()}</td>
                <td>{b.guests}</td>
                <td>{b.roomType}</td>
                <td>
                  <button className="delete-btn" onClick={() => handleDelete(b._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminDashboard;
