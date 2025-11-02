import mongoose from "mongoose";

export const getDataBase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sibiraj_db:JByR728D4zdRe9X5@cluster0.pwhndgt.mongodb.net/ElearningDB?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Cannot connect to database:", error.message);
    throw error; // So server.js can catch the error
  }
};
