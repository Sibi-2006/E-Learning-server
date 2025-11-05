import mongoose from "mongoose";

const QuizSchema = new mongoose.Schema({
  quizQuestion: { type: String, required: true },
  quizOptionA: { type: String, required: true },
  quizOptionB: { type: String, required: true },
  quizOptionC: { type: String, required: true },
  quizOptionD: { type: String, required: true },
  correctAnswer: { 
    type: String, 
    required: true,
    enum: ["A", "B", "C", "D"] 
  },
  category: {
    type: String,
    enum: ["html", "css", "javascript", "mongodb", "express", "react", "node"],
    required: true
  }
}, { timestamps: true }); 

export default mongoose.model("Quiz", QuizSchema);
