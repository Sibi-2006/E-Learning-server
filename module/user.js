import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, trim: true },
    name: { type: String, required: true, trim: true },
    password: { type: String, required: true },
    joinDate: { type: Date, default: Date.now },

    progress: {
      html: {
        completedLessons: { type: Number, default: 0 },
        totalLessons: { type: Number, default: 0 },
        percent: { type: Number, default: 0 },
        lastUpdated: { type: Date, default: Date.now },
      },
      css: {
        completedLessons: { type: Number, default: 0 },
        totalLessons: { type: Number, default: 0 },
        percent: { type: Number, default: 0 },
        lastUpdated: { type: Date, default: Date.now },
      },
      javascript: {
        completedLessons: { type: Number, default: 0 },
        totalLessons: { type: Number, default: 0 },
        percent: { type: Number, default: 0 },
        lastUpdated: { type: Date, default: Date.now },
      },
        mongodb: {
          completedLessons: { type: Number, default: 0 },
          totalLessons: { type: Number, default: 0 },
          percent: { type: Number, default: 0 },
          lastUpdated: { type: Date, default: Date.now },
        },
        express: {
          completedLessons: { type: Number, default: 0 },
          totalLessons: { type: Number, default: 0 },
          percent: { type: Number, default: 0 },
          lastUpdated: { type: Date, default: Date.now },
        },
        react: {
          completedLessons: { type: Number, default: 0 },
          totalLessons: { type: Number, default: 0 },
          percent: { type: Number, default: 0 },
          lastUpdated: { type: Date, default: Date.now },
        },
        node: {
          completedLessons: { type: Number, default: 0 },
          totalLessons: { type: Number, default: 0 },
          percent: { type: Number, default: 0 },
          lastUpdated: { type: Date, default: Date.now },
        },
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
