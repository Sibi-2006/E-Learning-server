import mongoose from "mongoose";

const htmlSchema = new mongoose.Schema({
  title: { type: String, required: true }, 
  description: { type: String, required: true },
  points: [String], 
  codeExample: String, 
  explanation: String, 
  category: { type: String, default: "HTML" },
  level: { type: String, enum: ["beginner", "intermediate", "advanced"], default: "beginner" },
  order: Number, 
  quiz: [
    {
      question: String,
      options: [String],
      answer: String
    }
  ],
});

export default mongoose.model("HtmlTutorial", htmlSchema);
