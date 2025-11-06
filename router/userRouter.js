import express from "express";
import { registerUser, loginUser } from "../controller/userController.js";
import { verifyToken } from "../middleware/authMiddleware.js";
import { updateProgress } from "../controller/profileController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/progress/:userId/:course", updateProgress);

// Example protected route
router.get("/profile", verifyToken, (req, res) => {
  res.json({ message: "Welcome to your profile!", user: req.user });
});

export default router;
