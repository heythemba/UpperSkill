import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (userId, res) => {
	// Generate a JSON Web Token (JWT)
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "10d",
	});

	 // Set the JWT as a cookie in the HTTP response
	res.cookie("jwt", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, //MS
		httpOnly: true, // prevent XSS attacks cross-site scripting attacks
		sameSite: "strict", // CSRF attacks cross-site request forgery attacks
		secure: process.env.NODE_ENV !== "development",
	});
};

