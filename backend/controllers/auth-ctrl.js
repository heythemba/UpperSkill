import { generateTokenAndSetCookie } from "../tools/Token.js";
import User from "../models/user-model.js";
import bcrypt from "bcryptjs";
//user signup, this function retrieves the necessary user data from the request body, validates the input, 
//checks for existing usernames and emails, hashes the password, creates a new User document, and saves it to the database,
//if successful, it generates a JWT token, sets it as a cookie in the response, and sends the user's information as a response.
export const signup = async (req, res) => {

	try {
		const { fullName, username, email, password, is_student } = req.body;

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return res.status(400).json({ error: "Invalid email format" });
		}

		const existingUser = await User.findOne({ username });
		if (existingUser) {
			return res.status(400).json({ error: "Username is already taken" });
		}

		const existingEmail = await User.findOne({ email });
		if (existingEmail) {
			return res.status(400).json({ error: "Email is already taken" });
		}

		if (password.length < 6) {
			return res.status(400).json({ error: "Password must be at least 6 characters long" });
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = new User({
			fullName,
			username,
			email,
			password: hashedPassword,
			is_student,
		});

		if (newUser) {
			console.dir(newUser,{depth: null})
			generateTokenAndSetCookie(newUser._id, res);
			
			await newUser.save();
			
			res.status(201).json({
				_id: newUser._id,
				fullName: newUser.fullName,
				username: newUser.username,
				email: newUser.email,
				is_student: newUser.is_student,
				profileImg: newUser.profileImg,
			});
		} else {
			res.status(400).json({ error: "Invalid user data" });
		}
	} catch (error) {
		console.log("Error in signup controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};
//user login, this function retrieves the email and password from the request body, 
//finds the user in the database, compares the hashed password, and generates a JWT token if the credentials are correct,
//it then sets the JWT token as a cookie in the response and sends the user's information as a response.
export const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

		if (!user || !isPasswordCorrect) {
			return res.status(400).json({ error: "Invalid email or password" });
		}

		generateTokenAndSetCookie(user._id, res);

		res.status(200).json({
			_id: user._id,
			fullName: user.fullName,
			username: user.username,
			email: user.email,
			is_student: user.is_student,
			profileImg: user.profileImg,
			coverImg: user.coverImg,
		});
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};
//user logout, this functionhandles the user logout process,
//it clears the JWT token from the cookie in the response and sends a success message.
export const logout = async (req, res) => {
	try {
		res.cookie("jwt", "", { maxAge: 0 });
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

//this function retrieves the current user's information from the database based on the user ID stored in the request,
//it selects the password field to exclude it from the response and sends the user's information as a response.
export const getMe = async (req, res) => {
	try {
		const user = await User.findById(req.user._id).select("-password");
		res.status(200).json(user);
	} catch (error) {
		console.log("Error in getMe controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

