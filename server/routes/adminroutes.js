import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

// Dummy admin credentials
const ADMIN_EMAIL = "madhurikapse573@gmail.com";
const ADMIN_PASS = "Madhuri@123";

// POST /api/admin/login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === ADMIN_EMAIL && password === ADMIN_PASS) {
    const token = jwt.sign({ email }, "secretKey", { expiresIn: "1h" });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

export default router;
