import mongoose from "mongoose";
import * as dotenv from 'dotenv';

dotenv.config();  // Load environment variables
const mongoDBURI = process.env.mongosrv

// Function to connect to MongoDB
const connectMongoDB = async () => {
	try {
		const conn = await mongoose.connect(mongoDBURI);
		console.log(`MongoDB connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error connection to mongoDB: ${error.message}`);
		process.exit(1);
	}
};

// Export the connection function
export default connectMongoDB;
