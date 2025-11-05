import HtmlTutorial from "../module/htmlSchema.js";
import CssTutorial from "../module/cssSchema.js";

const fetchLesson = async (Model, order, res, type) => {
  try {
    // ✅ Validate input
    if (!order) {
      return res.status(400).json({
        success: false,
        message: "Lesson order is required.",
      });
    }

    const orderNumber = Number(order);

    // ✅ Check if it's a valid number
    if (isNaN(orderNumber) || orderNumber <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid order number. It must be a positive integer.",
      });
    }

    // ✅ Query database safely
    const currentLesson = await Model.findOne({ order: orderNumber });

    if (!currentLesson) {
      return res.status(404).json({
        success: false,
        message: `${type} lesson not found.`,
      });
    }

    return res.status(200).json({
      success: true,
      message: `${type} lesson fetched successfully.`,
      lesson: currentLesson,
    });
  } catch (error) {
    console.error(`Error fetching ${type} lesson:`, error);
    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};

// =================== HTML LESSON ===================
export const GetHtmlLesson = async (req, res) => {
  const { order } = req.params;
  await fetchLesson(HtmlTutorial, order, res, "HTML");
};

// =================== CSS LESSON ===================
export const GetCssLesson = async (req, res) => {
  const { order } = req.params;
  await fetchLesson(CssTutorial, order, res, "CSS");
};
