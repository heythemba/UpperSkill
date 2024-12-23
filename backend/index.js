import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth-route.js";
import connectMongoDB from "./data-base/connectMongoDB.js";
import bodyParser from 'body-parser';


dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cookieParser());

console.log(process.env.mongosrv);


app.use("/api/auth", authRoutes);





app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
	connectMongoDB();
});
