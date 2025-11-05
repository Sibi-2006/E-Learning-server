import express from "express";
import { AddQuiz , GetQuiz } from "../controller/QuizController.js"
const router = express.Router();

router.post("/newquiz",AddQuiz);
router.get("/get/:courseName/quiz", GetQuiz)
export default router;