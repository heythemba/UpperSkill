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
		discription: {
			type: String,
            required: true,
		},
		img: {
			type: String,
            required: false,
		},
        content: {
            type: String,
            required: true,
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
