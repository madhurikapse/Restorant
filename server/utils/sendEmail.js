import nodemailer from "nodemailer";

// Log env vars for debugging
console.log("📧 Email:", process.env.ADMIN_EMAIL);
console.log("🔐 Pass:", process.env.ADMIN_PASS ? "✅ Loaded" : "❌ MISSING");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_PASS,
  },
});

export const sendBookingEmail = async (booking) => {
  try {
    const mailOptions = {
      from: `"Hotel Booking" <${process.env.ADMIN_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "New Booking Received",
      html: `
        <h2>Booking Details</h2>
        <p><strong>Name:</strong> ${booking.name}</p>
        <p><strong>Email:</strong> ${booking.email}</p>
        <p><strong>Phone:</strong> ${booking.phone}</p>
        <p><strong>Check-in:</strong> ${booking.checkin}</p>
        <p><strong>Check-out:</strong> ${booking.checkout}</p>
        <p><strong>Guests:</strong> ${booking.guests}</p>
        <p><strong>Room Type:</strong> ${booking.roomType}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent");
  } catch (error) {
    console.error("❌ Email error:", error);
  }
};
