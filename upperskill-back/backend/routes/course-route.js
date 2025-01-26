import express from "express";
import { createCourse, deleteCourse, getAllCourses, enrollToCourse, yourCourses, recommandation, teacherCourses } from "../controllers/course-ctrl.js";

import { protectRoute } from "../tools/R-protection.js";


const router = express.Router();

router.post("/create",protectRoute,createCourse);
router.delete("/:id", protectRoute,deleteCourse);
router.get("/all", protectRoute, getAllCourses);
router.post("/enroll/:id", protectRoute, enrollToCourse);
router.get("/enrolled/:id", protectRoute, yourCourses);
router.get("/teacher/:id", protectRoute, teacherCourses);
router.post("/quiz", protectRoute,recommandation)


export default router;
