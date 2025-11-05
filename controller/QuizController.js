import Quiz from "../module/QuizSchema.js";

export const AddQuiz = async (req, res) => {
    const {
        quizQuestion,
        quizOptionA,
        quizOptionB,
        quizOptionC,
        quizOptionD,
        correctAnswer,
        category
    } = req.body;

    if (!quizQuestion || !quizOptionA || !quizOptionB || !quizOptionC || !quizOptionD || !correctAnswer || !category) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const newQuiz = { quizQuestion, quizOptionA, quizOptionB, quizOptionC, quizOptionD, correctAnswer, category };
        const savedQuiz = await Quiz.create(newQuiz);
        res.status(200).json({ message: "Quiz is added", newQuiz: savedQuiz });
    } catch (err) {
        console.error("Error on Add a quiz:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const GetQuiz = async (req, res) => {
    const { courseName } = req.params;

    if (!courseName) return res.status(400).json({ message: "Course name is required" });

    try {
        const oneCourseQuiz = await Quiz.find({ category: courseName });

        if (oneCourseQuiz.length === 0) {
            return res.status(404).json({ message: "No quizzes found for this course" });
        }

        res.status(200).json({ message: "Quiz fetched successfully", quiz: oneCourseQuiz });
    } catch (err) {
        console.error("Error on fetching quiz:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
