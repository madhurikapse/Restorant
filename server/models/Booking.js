import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  checkin: Date,
  checkout: Date,
  guests: Number,
  roomType: String,
});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
