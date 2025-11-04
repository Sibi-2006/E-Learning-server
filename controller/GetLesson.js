import HtmlTutorial from "../module/htmlSchema.js";
import CssTutorial from "../module/cssSchema.js";
export const GetHtmlLesson = async (req, res) => {
  try {
    const { order } = req.params;

    // Validate input
    if (!order) {
      return res.status(400).json({
        success: false,
        message: "Lesson order is required."
      });
    }

    // Find the lesson
    const currentLesson = await HtmlTutorial.findOne({ order: Number(order) });

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
      message: "Server error. Please try again later."
    });
  }
};


export const GetCssLesson = async (req, res) => {
  try {
    const { order } = req.params;

    // Validate input
    if (!order) {
      return res.status(400).json({
        success: false,
        message: "Lesson order is required."
      });
    }

    // Find the lesson
    const currentLesson = await CssTutorial.findOne({ order: Number(order) });

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
      message: "Server error. Please try again later."
    });
  }
};

