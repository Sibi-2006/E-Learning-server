import express from "express";
const router = express.Router();
import { Add_Css_lesson, addNewCourse } from "../controller/courseController.js"
import { Add_Js_lesson } from "../controller/JavaScriptController.js"
import { GetHtmlLesson } from "../controller/GetLesson.js"
//Add new course for HTML
router.post('/course/html',addNewCourse);
router.post('/course/css' , Add_Css_lesson);
router.post('/course/js' , Add_Js_lesson);
//fecth lesson 
router.get("/course/html/lessons/:order",GetHtmlLesson);

export default router;