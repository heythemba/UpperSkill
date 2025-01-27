# UpperSkill
ALX Final Project UpperSkill: is a user freindly platform decicated to students who want to upgrade their skills, upon first login, user is directed to pass a quizz to define their skills level, the result will analyzed using AI and recommand the best courses to continue grow skills.
# UpperSkill

UpperSkill is a portfolio project developed during the ALX Academy Software Engineering program. It is an educational platform designed to guide learners in becoming experts in their skills by recommending courses based on their skill level. The platform assesses a user's proficiency through an initial quiz and uses the results to recommend tailored courses.

## Features

- **User Skill Assessment:** A quiz to evaluate users' existing skill levels.
- **Course Recommendations:** AI-driven recommendations based on quiz results.
- **Educational Focus Areas:** A variety of topics ranging from personal development to programming.

## Technology Stack

### Front-End

- Built with **React**.
- Managed by **Vite** for faster builds and a smoother development experience.

### Back-End

- Built with **Express.js**.
- Includes features like secure authentication (via **bcryptjs**), session management, and database integration with **Mongoose**.

## Getting Started

To test this product locally, follow the instructions below.

### Clone the Repository

```bash
git clone <repository-url>
cd UpperSkill
```

### Front-End (Client-Side)

1. Navigate to the front-end directory:
   ```bash
   cd upperskill-front
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the local development server:
   ```bash
   npm run dev
   ```

### Back-End (Server-Side)

1. Navigate to the back-end directory:
   ```bash
   cd upperskill-back
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm run dev
   ```

## Additional Information

### Front-End Dependencies

- **React**: Core library for building the UI.
- **React Query**: Efficient data fetching and state management.
- **React Router DOM**: Routing and navigation.
- **React Hook Form**: Form handling.
- **React Hot Toast**: Notifications.
- **React Feather**: Icons for the UI.
- **OpenAI**: AI-based integrations.

### Back-End Dependencies

- **Express**: Web framework for the back-end.
- **Mongoose**: MongoDB object modeling.
- **bcryptjs**: For password hashing.
- **JSON Web Token**: For secure authentication.
- **Cloudinary**: Media and file management.
- **CORS**: Cross-origin resource sharing.
- **dotenv**: Environment variable management.

### Authors

- **Haythem Baganna**: Front-End Developer
- **Racem Bouchnak**: Back-End Developer

## License

This project is licensed under the ISC License. For more details, see the LICENSE file.