import express from "express";
import Booking from "../models/Booking.js";
import { verifyToken } from "../middelwear/auth.js";
import { sendBookingEmail } from "../utils/sendEmail.js";

const router = express.Router();

// ✅ Only keep ONE POST route
router.post("/", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();

    // ✉️ Send email to admin
    await sendBookingEmail(booking);

    res.status(201).json({ message: "Booking saved and email sent!" });
  } catch (err) {
    console.error("❌ Booking save error:", err);
    res.status(500).json({ error: "Failed to save booking" });
  }
});

// ✅ Admin: Get all bookings
router.get("/", verifyToken, async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});

// ✅ Admin: Delete a booking
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: "Booking deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete booking" });
  }
});

export default router;
