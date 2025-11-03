//JavaScript
import JavaScriptTutorial from "../module/JavaScriptSchema.js"

export const Add_Js_lesson = async (req, res) => {
  try {
    const {
      title,
      description,
      points,
      codeExample,
      explanation,
      level,
      quizQuestion,
      quizOptionA,
      quizOptionB,
      quizOptionC,
      quizOptionD,
      correctAnswer,
    } = req.body;

    // Validation
    const requiredFields = {
      title,
      description,
      points,
      codeExample,
      explanation,
      level,
      quizQuestion,
      quizOptionA,
      quizOptionB,
      quizOptionC,
      quizOptionD,
      correctAnswer,
    };

    const emptyFields = Object.keys(requiredFields).filter(
      (key) => !requiredFields[key] || requiredFields[key].toString().trim() === ""
    );

    if (emptyFields.length > 0) {
      return res.status(400).json({
        message: `Missing fields: ${emptyFields.join(", ")}`,
      });
    }

    // Count lessons to assign next order
    const lessonCount = await JavaScriptTutorial.countDocuments();

    // Quiz object
    const quiz = {
      quizQuestion,
      quizOptionA,
      quizOptionB,
      quizOptionC,
      quizOptionD,
      correctAnswer,
    };

    // Create lesson
    const newLesson = {
      title,
      description,
      points: Array.isArray(points)
        ? points
        : points.split(",").map((p) => p.trim()),
      codeExample,
      explanation,
      level,
      order: lessonCount + 1,
      quiz,
    };

    const createdLesson = await JavaScriptTutorial.create(newLesson);
    res.status(201).json({
      message: " JavaScript lesson created successfully",
      newLesson: createdLesson,
    });
  } catch (err) {
    console.error("Error creating JavaScript lesson:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
