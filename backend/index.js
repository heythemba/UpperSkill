import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";

import authRoutes from "./routes/auth-route.js";
import courseRoutes from "./routes/course-route.js";
import connectMongoDB from "./data-base/connectMongoDB.js";
import bodyParser from 'body-parser';


dotenv.config();

cloudinary.config({
	cloud_name: process.env.cloudinary_name,
	api_key: process.env.cloudinary_key,
	api_secret: process.env.cloudinary_secret,
});

const PORT = process.env.PORT || 5000;

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cookieParser());

console.log(process.env.mongosrv);


app.use("/api/auth", authRoutes);
app.use("/api/course", courseRoutes);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
	connectMongoDB();
});
