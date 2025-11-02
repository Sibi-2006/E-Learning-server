import express, { urlencoded } from "express";
import cors from "cors";
import { getDataBase } from "./db.js"; 
import userRouter from "./router/userRouter.js"; 

const app = express();
const PORT = 3500;

// Middleware
app.use(express.json());
app.use(urlencoded({ extended: true }));

//  CORS
app.use(cors());

// Routes
app.use("/api", userRouter);

//  Start Server
const startServer = async () => {
  try {
    await getDataBase();
    app.listen(PORT, () => {
      console.log("✅ Server running on port", PORT, "...");
    });
  } catch (err) {
    console.error("❌ Failed to connect to database:", err.message);
  }
};

startServer();
