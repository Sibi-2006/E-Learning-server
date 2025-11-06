import mongoose from "mongoose";

const reactSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  points: [String],
  codeExample: { type: String, required: true },
  explanation: { type: String, required: true },
  category: { type: String, default: "react" },
  level: {
    type: String,
    enum: ["beginner", "intermediate", "advanced"],
    default: "beginner",
  },
  order: { type: Number, default: 1 }, 
  quiz: {
    quizQuestion: { type: String, required: true },
    quizOptionA: { type: String, required: true },
    quizOptionB: { type: String, required: true },
    quizOptionC: { type: String, required: true },
    quizOptionD: { type: String, required: true },
    correctAnswer: { type: String, required: true },
  },
});

export default mongoose.model("reactTutorial", reactSchema);