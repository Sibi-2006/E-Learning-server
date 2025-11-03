import express from "express";
import dotenv from "dotenv";
const router = express.Router();
dotenv.config();
router.post("/login", (req, res) => {
  const { adminId, password } = req.body;

  if (
    adminId === process.env.ADMIN_ID &&
    password === process.env.ADMIN_PASS
  ) {
    res.json({ success: true, message: "Login successful" });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});
export default router;