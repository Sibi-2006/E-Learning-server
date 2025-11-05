import express from "express";
const router = express.Router();
import { Add_Css_lesson, addNewCourse } from "../controller/courseController.js"
import { Add_Js_lesson, GetJsLesson } from "../controller/JavaScriptController.js"
import { GetCssLesson, GetHtmlLesson } from "../controller/GetLesson.js"
import { GetMaxOrderInCSS, GetMaxOrderInHTML, GetMaxOrderInJS } from "../controller/GetAllMaxOrder.js";
//Add new course for HTML
router.post('/course/html',addNewCourse);
router.post('/course/css' , Add_Css_lesson);
router.post('/course/js' , Add_Js_lesson);



router.get("/course/html/lessons/maxorder" , GetMaxOrderInHTML)
router.get("/course/css/lessons/maxorder" , GetMaxOrderInCSS)
router.get("/course/javascript/lessons/maxorder" , GetMaxOrderInJS)
//fecth lesson 
router.get("/course/html/lessons/:order",GetHtmlLesson);
router.get("/course/css/lessons/:order",GetCssLesson);
router.get("/course/javascript/lessons/:order",GetJsLesson);

export default router;