import express from "express";
const router = express.Router();
import { Add_Css_lesson, addNewCourse } from "../controller/courseController.js"
import { Add_Js_lesson, GetJsLesson } from "../controller/JavaScriptController.js"
import { GetCssLesson, GetHtmlLesson } from "../controller/GetLesson.js"
import { GetMaxOrderInCSS, GetMaxOrderInEXPRESS, GetMaxOrderInHTML, GetMaxOrderInJS, GetMaxOrderInMONGO, GetMaxOrderInNode, GetMaxOrderInREACT } from "../controller/GetAllMaxOrder.js";
import { Add_Mongo_lesson, GetMongoLesson } from "../controller/mongoController.js";
import { Add_Express_lesson, GetExpressLesson } from "../controller/expressController.js";
import { Add_React_lesson, GetReactLesson } from "../controller/reactController.js";
import { Add_Node_lesson, GetNodeLesson } from "../controller/nodeController.js";
//Add new course for HTML
router.post('/course/html',addNewCourse);
router.post('/course/css' , Add_Css_lesson);
router.post('/course/js' , Add_Js_lesson);
router.post('/course/mongo',Add_Mongo_lesson);
router.post('/course/express',Add_Express_lesson);
router.post('/course/react', Add_React_lesson);
router.post('/course/node', Add_Node_lesson);

router.get("/course/html/lessons/maxorder" , GetMaxOrderInHTML)
router.get("/course/css/lessons/maxorder" , GetMaxOrderInCSS)
router.get("/course/javascript/lessons/maxorder" , GetMaxOrderInJS)
router.get("/course/mongo/lessons/maxorder" , GetMaxOrderInMONGO)
router.get("/course/express/lessons/maxorder" , GetMaxOrderInEXPRESS)
router.get("/course/react/lessons/maxorder" , GetMaxOrderInREACT)
router.get("/course/node/lessons/maxorder" , GetMaxOrderInNode)
//fecth lesson 
router.get("/course/html/lessons/:order",GetHtmlLesson);
router.get("/course/css/lessons/:order",GetCssLesson);
router.get("/course/javascript/lessons/:order",GetJsLesson);
router.get("/course/mongo/lessons/:order", GetMongoLesson);
router.get("/course/express/lessons/:order", GetExpressLesson);
router.get("/course/react/lessons/:order", GetReactLesson);
router.get("/course/node/lessons/:order", GetNodeLesson);
export default router;