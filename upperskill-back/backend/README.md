`# UpperSkill Back-End

The back-end of UpperSkill is built with **Express.js**, providing a robust and scalable server-side architecture. It handles user authentication, skill assessments, course recommendations, and data management.

## Features
- **User Authentication**: Secure login and registration using hashed passwords.
- **Skill Assessment**: Processes quiz results to determine skill levels.
- **AI-Driven Recommendations**: Uses analyzed data to recommend courses.
- **Database Management**: Manages users, quizzes, and courses using MongoDB.

## Getting Started
Follow these instructions to run the back-end server locally.

### Clone the Repository
```bash
git clone <repository-url>
cd UpperSkill
```

### Navigate to Back-End Directory
```bash
cd upperskill-back
```

### Install Dependencies
```bash
npm install
```

### Run the Development Server
```bash
npm run dev
```

### Start the Production Server
To start the server in production mode:
```bash
npm start
```

## Back-End Dependencies
- **bcryptjs**: For hashing passwords securely.
- **body-parser**: Middleware for parsing incoming requests.
- **cloudinary**: Cloud-based media management.
- **cookie-parser**: Parses cookies for session management.
- **cors**: Enables cross-origin resource sharing.
- **dotenv**: Environment variable management.
- **express**: Web framework for building APIs.
- **jsonwebtoken**: For generating and verifying tokens.
- **mongoose**: ODM for MongoDB.

## Development Dependencies
- **nodemon**: Automatically restarts the server during development.

## Directory Structure
```
backend/
|-- index.js         # Entry point of the application
|-- models/          # Database models
|-- routes/          # API route definitions
|-- controllers/     # Logic for handling requests
|-- middleware/      # Custom middleware
|-- config/          # Configuration files (e.g., database, environment)
```

## Environment Variables
Create a `.env` file in the `backend/` directory and define the following variables:
```
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret_key>
CLOUDINARY_URL=<your_cloudinary_url>
PORT=<port_number>
```

## Authors
- **Racem Bouchnak**: Back-End Developer

## License
This project is licensed under the ISC License. For more details, see the LICENSE file.

---
Happy developing with UpperSkill Back-End!

`