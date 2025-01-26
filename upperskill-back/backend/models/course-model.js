import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    /* img: {
      type: String,
      required: false,
    }, */
    content: {
      type: String,
      required: true,
    },
    topic: {
      /* title: { */
        type: String,
        required: true,
        enum: [
          "Health and Personal Development",
          "Language and Communication",
          "Creative Skills",
          "STEM (Science, Technology, Engineering, Mathematics)",
          "Business and Management",
          "Technology and Programming",
        ],
      /* }, */
      /* subtopics: [
        {
          type: String,
          required: true,
          enum: [
            "Mental Wellness",
            "Physical Fitness",
            "Personal Growth",
            "Language Learning",
            "Public Speaking",
            "Writing and Editing",
            "Design and Multimedia",
            "Content Creation",
            "Music and Audio Production",
            "Natural Sciences",
            "Engineering",
            "Mathematics",
            "Leadership and Strategy",
            "Project Management",
            "Entrepreneurship",
            "Finance and Accounting",
            "Web Development",
            "Data Science and AI",
            "Cybersecurity",
            "Cloud Computing",
          ],
        },
      ], */
    },
    enroll: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);

export default Course;
