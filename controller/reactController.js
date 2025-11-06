
import reactTutorial from "../module/reactSchema.js"


export const Add_React_lesson = async (req, res) => {
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
    const lessonCount = await reactTutorial.countDocuments();

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

    const createdLesson = await reactTutorial.create(newLesson);
    res.status(201).json({
      message: "CSS lesson created successfully",
      newLesson: createdLesson,
    });
  } catch (err) {
    console.error("Error creating CSS lesson:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};



export const GetReactLesson = async (req, res) => {
  try {
    const { order } = req.params;

    // Convert and validate
    const orderNumber = Number(order);
    if (isNaN(orderNumber) || orderNumber <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid lesson order. Must be a positive number."
      });
    }

    // Find the lesson
    const currentLesson = await reactTutorial.findOne({ order: orderNumber });

    if (!currentLesson) {
      return res.status(404).json({
        success: false,
        message: "Lesson not found."
      });
    }

    // Success response
    res.status(200).json({
      success: true,
      message: "Lesson fetched successfully.",
      lesson: currentLesson
    });

  } catch (error) {
    console.error("Error fetching lesson:", error);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
      error: error.message
    });
  }
};
