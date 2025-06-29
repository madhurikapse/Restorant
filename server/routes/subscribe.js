import express from 'express';
import nodemailer from 'nodemailer';
import 'dotenv/config';

const router = express.Router();

// Setup transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail ID
    pass: process.env.EMAIL_PASS, // App password
  },
});

// Route to handle hotel enquiry subscriptions
router.post('/subscribe', async (req, res) => {
  const { firstName, email } = req.body;

  console.log('📨 New enquiry received:', req.body);

  if (!firstName || !email) {
    console.log('⚠️ Missing name or email');
    return res.status(400).json({ success: false, message: 'Name and email are required.' });
  }

  try {
    // Email to guest
    const userMailOptions = {
      from: `"Hotel Reservations" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank You for Your Enquiry Purva Farmhouse and resort',
      text: `Dear ${firstName},\n\nThank you for contacting Purva Farmhouse and resort!\n\nOur reservation team has received your enquiry and will get back to you as soon as possible.\n\nWarm regards,\nThe purva resort and Farmhouse Team`,
    };

    // Email to admin/hotel team
    const adminMailOptions = {
      from: `"Hotel Website" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: '🆕 New Guest Enquiry',
      text: `A new enquiry has been submitted:\n\n👤 Name: ${firstName}\n📧 Email: ${email}\n\nCheck the dashboard or reach out to the guest for further details.`,
    };

    console.log('📤 Sending confirmation to guest...');
    await transporter.sendMail(userMailOptions);
    console.log('✅ Guest email sent');

    console.log('📤 Notifying admin...');
    await transporter.sendMail(adminMailOptions);
    console.log('✅ Admin email sent');

    res.json({ success: true, message: 'Enquiry received and emails sent.' });
  } catch (error) {
    console.error('❌ Email sending failed:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to send confirmation. Please try again later.',
      error: error.message,
    });
  }
});

export default router;
