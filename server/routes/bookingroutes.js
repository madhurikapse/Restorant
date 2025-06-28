import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

// POST route to save booking
router.post("/", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: "Booking saved!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save booking" });
  }
});

export default router;
