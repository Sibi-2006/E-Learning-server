import HtmlTutorial from "../module/htmlSchema.js";
import CssTutorial from "../module/cssSchema.js";
import JavaScriptTutorial from "../module/JavaScriptSchema.js";
import expressTutorial from "../module/expressSchema.js";
import mongoTutorial from "../module/mongoSchema.js";
import nodeTutorial from "../module/nodeSchema.js";

import reactTutorial from "../module/reactSchema.js"
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

//mongo
export const GetMaxOrderInMONGO = async (req, res) => {
  try {
    const count = await mongoTutorial.countDocuments();
    return res.status(200).json({
      success: true,
      Max_order: count,
    });
  } catch (error) {
    console.error("Error fetching HTML max order:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

//express
export const GetMaxOrderInEXPRESS = async (req, res) => {
  try {
    const count = await expressTutorial.countDocuments();
    return res.status(200).json({
      success: true,
      Max_order: count,
    });
  } catch (error) {
    console.error("Error fetching HTML max order:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

//react
export const GetMaxOrderInREACT = async (req, res) => {
  try {
    const count = await reactTutorial.countDocuments();
    return res.status(200).json({
      success: true,
      Max_order: count,
    });
  } catch (error) {
    console.error("Error fetching HTML max order:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

//node 
export const GetMaxOrderInNode = async (req, res) => {
  try {
    const count = await nodeTutorial.countDocuments();
    return res.status(200).json({
      success: true,
      Max_order: count,
    });
  } catch (error) {
    console.error("Error fetching HTML max order:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};