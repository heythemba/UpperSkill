import { v2 as cloudinary } from "cloudinary";
import qs from "qs";

import Course from "../models/course-model.js";
import User from "../models/user-model.js";

//Retrieves the necessary data from the request body, validates the input,
//uploads the course image to Cloudinary, creates a new Course document,
//and saves it to the database.
export const createCourse = async (req, res) => {
  try {
    const { title, description, content, topic } = req.body;
    let { img } = req.body;
    const userId = req.user._id.toString();

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    if (!title || !description || !content || !img || !topic) {
      return res.status(400).json({ error: "fill all the field" });
    }
    if (!validateTopic(topic))
      return res.status(400).json({ error: "wrong topic title or subtopics" });

    if (img) {
      const uploadedResponse = await cloudinary.uploader.upload(img);
      img = uploadedResponse.secure_url;
    }

    const newCourse = new Course({
      user: userId,
      title,
      description,
      content,
      topic,
      img,
    });

    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    console.log("Error in createCourse ", error);
  }
};
//finds the course by its ID, checks if the user is authorized to delete the course,
//deletes the course image from Cloudinary, and removes the course from the database.
export const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    if (course.user.toString() !== req.user._id.toString()) {
      return res
        .status(401)
        .json({ error: "You are not authorized to delete this Course" });
    }

    if (course.img) {
      const imgId = course.img.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(imgId);
    }

    await Course.findByIdAndDelete(req.params.id);

    res.status(200).json({ error: "Course deleted successfully" });
  } catch (error) {
    console.log("Error in deleteCourse ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
//retrieves all courses from the database and sorts them by title in ascending order,
//then sends the list of courses as a response to the client.
export const getAllCourses = async (req, res) => {
  const topic = qs.parse(req.query).topic;
  console.log(topic);
  try {
    if (topic) {
      const course = await Course.find({ "topic.title": topic }).sort({
        title: 1,
      });
      if (course.length === 0) {
        return res.status(200).json([]);
      }

      res.status(200).json(course);
    } else {
      const course = await Course.find().sort({ title: 1 });
      if (course.length === 0) {
        return res.status(200).json([]);
      }

      res.status(200).json(course);
    }
  } catch (error) {
    console.log("Error in getallcourses : ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
//enroll a user to a specific course, it retrieves the user ID and course ID from the request parameters,
//checks if the user is already enrolled in the course, adds the user to the course's enrolled list,
//and updates the user's enrolled courses list.
export const enrollToCourse = async (req, res) => {
  try {
    const userId = req.user._id;
    const { id: courseId } = req.params;

    const course = await Course.findById(courseId);
    const user = req.user;

    if (!courseId) {
      return res.status(404).json({ error: "course not found" });
    }
    const enrolled = course.enroll.includes(userId);

    if (!enrolled) {
      course.enroll.push(userId);
      await User.updateOne(
        { _id: userId },
        { $push: { courseenroll: courseId } }
      );
      await course.save();

      user.enrolled.push(courseId);
      await Course.updateOne(
        { _id: courseId },
        { $push: { userenrolled: userId } }
      );
      await user.save();

      res.status(200).json({ error: "Enrolled successfully" });
    } else {
      return res
        .status(400)
        .json({ error: "You are already enrolled in this course" });
    }
  } catch (error) {
    console.log("Error in enrollToCourse controller: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
//retrieves the list of courses that a specific user is enrolled in,
//it finds the user by their ID, retrieves the enrolled courses from the database,
//and sends the list of enrolled courses as a response to the client.
export const yourCourses = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    const enrolled = await Course.find({ _id: { $in: user.enrolled } });

    res.status(200).json(enrolled);
  } catch (error) {
    console.log("Error in yourCourses controller: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//This function is used to rocommend the list of courses based on the ai quiz data

export const recommandation = async (req, res) => {
  const topic = qs.parse(req.query).topic;
  const userId = req.user._id;
  try {
    let user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const course = await Course.find({ "topic.title": topic }).sort({
      title: 1,
    });
    res.status(200).json(course);

    user.quizTaken = true;
    user.isStudent = true;
    await user.save();

  } catch (error) {
    console.log("Error in recommandation controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//This function is used to validate the topic title and subtopics.
function validateTopic(topic) {
  const { title, subtopics } = topic;
  if (typeof title != "string" || !Array.isArray(subtopics)) return false;
  switch (title) {
    case "Health and Personal Development":
      if (
        subtopics.length <= 3 &&
        subtopics.every((subtopic) =>
          ["Mental Wellness", "Physical Fitness", "Personal Growth"].includes(
            subtopic
          )
        )
      )
        return true;
      break;
    case "Language and Communication":
      if (
        subtopics.length <= 3 &&
        subtopics.every((subtopic) =>
          [
            "Language Learning",
            "Public Speaking",
            "Writing and Editing",
          ].includes(subtopic)
        )
      )
        return true;
      break;
    case "Creative Skills":
      if (
        subtopics.length <= 3 &&
        subtopics.every((subtopic) =>
          [
            "Design and Multimedia",
            "Content Creation",
            "Music and Audio Production",
          ].includes(subtopic)
        )
      )
        return true;
      break;
    case "STEM (Science, Technology, Engineering, Mathematics)":
      if (
        subtopics.length <= 3 &&
        subtopics.every((subtopic) =>
          ["Natural Sciences", "Engineering", "Mathematics"].includes(subtopic)
        )
      )
        return true;
      break;
    case "Business and Management":
      if (
        subtopics.length <= 4 &&
        subtopics.every((subtopic) =>
          [
            "Leadership and Strategy",
            "Project Management",
            "Entrepreneurship",
            "Finance and Accounting",
          ].includes(subtopic)
        )
      )
        return true;
      break;
    case "Technology and Programming":
      if (
        subtopics.length <= 4 &&
        subtopics.every((subtopic) =>
          [
            "Web Development",
            "Data Science and AI",
            "Cybersecurity",
            "Cloud Computing",
          ].includes(subtopic)
        )
      )
        return true;
      break;
    default:
      return false;
  }
}
