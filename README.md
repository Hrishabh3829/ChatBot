# Virtual Assistant

A personalized AI-powered virtual assistant web application with voice recognition capabilities, custom appearance, and integration with Google's Gemini API.

## Overview

Virtual Assistant is a full-stack web application that provides users with a personalized AI assistant experience. Users can create accounts, customize their assistant's appearance and name, and interact with the AI through text or voice commands. The assistant can perform various tasks such as web searches, playing YouTube videos, providing information, and more.

## Features

- **User Authentication**: Secure signup and signin with JWT-based authentication
- **Assistant Customization**: Users can select or upload custom images for their assistant and give it a name
- **Voice Recognition**: Built-in speech-to-text functionality for voice commands
- **Text-to-Speech**: Responses are provided both visually and through voice
- **Multiple Command Types**: The assistant can:
  - Answer general questions
  - Search Google
  - Search and play YouTube videos
  - Open applications like Calculator, Instagram, and Facebook
  - Provide time, date, and weather information

## Tech Stack

### Frontend
- **React**: UI library
- **React Router Dom**: Navigation and routing
- **Tailwind CSS**: Styling
- **Axios**: API requests
- **Sonner**: Toast notifications
- **React Icons**: UI icons
- **Web Speech API**: Voice recognition and synthesis

### Backend
- **Node.js**: Runtime environment
- **Express**: Web framework
- **MongoDB**: Database (via Mongoose)
- **JWT**: Authentication
- **Bcrypt**: Password hashing
- **Cloudinary**: Image storage
- **Google Gemini API**: AI capabilities
- **Cookie Parser**: Cookie management
- **CORS**: Cross-origin resource sharing

## Project Structure

```
VirtualAssistant/
├── backend/
│   ├── config/
│   │   ├── cloudinary.js
│   │   ├── db.js
│   │   └── token.js
│   ├── controllers/
│   │   ├── auth.controllers.js
│   │   └── user.controllers.js
│   ├── middlewares/
│   │   ├── isAuth.js
│   │   └── multer.js
│   ├── models/
│   │   └── user.model.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── user.routes.js
│   ├── gemini.js
│   ├── index.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   └── Card.jsx
│   │   ├── context/
│   │   │   └── UserContext.jsx
│   │   ├── pages/
│   │   │   ├── Customize.jsx
│   │   │   ├── Customize2.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── SignIn.jsx
│   │   │   └── SignUp.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB database
- Google Gemini API key
- Cloudinary account

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/VirtualAssistant.git
   cd VirtualAssistant
   ```

2. Set up backend
   ```bash
   cd backend
   npm install
   ```

3. Create a `.env` file in the backend directory with the following:
   ```
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   GEMINI_API_URL=your_gemini_api_url
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_key
   CLOUDINARY_API_SECRET=your_cloudinary_secret
   ```

4. Set up frontend
   ```bash
   cd ../frontend
   npm install
   ```

5. Start the servers
   ```bash
   # In backend directory
   npm run dev
   
   # In frontend directory
   npm run dev
   ```

## Usage

1. Create a new account by signing up
2. Login with your credentials
3. Customize your assistant's appearance and name
4. Interact with your assistant through text or voice commands
5. Try commands like:
   - "What's the weather today?"
   - "Search for cats on Google"
   - "Play music on YouTube"
   - "What time is it?"

## Deployment

- Backend: Deployed on [Render](https://render.com) or similar service
- Frontend: Deployed on [Render](https://render.com) or similar service

## Author

Hrishabh

## License

ISC License
