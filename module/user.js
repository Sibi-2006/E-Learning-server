import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    joinDate: {
      type: Date,
      default: Date.now,
    },
    progress: {
      type: Map,
      of: Number, 
      default: {},
    },
  },
  { timestamps: true } 
);

export default mongoose.models.User || mongoose.model("User", userSchema);
