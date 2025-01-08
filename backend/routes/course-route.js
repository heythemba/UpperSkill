import express from "express";
import { createCourse, deleteCourse, getAllcourses, enrollToCourse, yourCourses } from "../controllers/course-ctrl.js";

import { protectRoute } from "../tools/R-protection.js";


const router = express.Router();

router.post("/create",protectRoute,createCourse);
router.delete("/:id", protectRoute,deleteCourse);
router.get("/all", protectRoute, getAllcourses);
router.post("/enroll/:id", protectRoute, enrollToCourse);
router.get("/enrolled/:id", protectRoute, yourCourses);


export default router;
