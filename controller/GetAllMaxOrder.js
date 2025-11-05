import HtmlTutorial from "../module/htmlSchema.js";
import CssTutorial from "../module/cssSchema.js";
import JavaScriptTutorial from "../module/JavaScriptSchema.js";

// ✅ HTML
export const GetMaxOrderInHTML = async (req, res) => {
  try {
    const count = await HtmlTutorial.countDocuments();
    return res.status(200).json({
      success: true,
      Max_order: count,
    });
  } catch (error) {
    console.error("Error fetching HTML max order:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ✅ CSS
export const GetMaxOrderInCSS = async (req, res) => {
  try {
    const count = await CssTutorial.countDocuments();
    return res.status(200).json({
      success: true,
      Max_order: count,
    });
  } catch (error) {
    console.error("Error fetching CSS max order:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ✅ JS
export const GetMaxOrderInJS = async (req, res) => {
  try {
    const count = await JavaScriptTutorial.countDocuments();
    return res.status(200).json({
      success: true,
      Max_order: count,
    });
  } catch (error) {
    console.error("Error fetching JS max order:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
