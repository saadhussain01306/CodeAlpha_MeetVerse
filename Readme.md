# MeetVerse

MeetVerse is a MERN stack-based online meeting application that allows users to securely login and register, schedule and join video meetings, and interact through features like chat, screen sharing, and multi-member sessions. It utilizes Agora Real-Time Voice and Video Engagement libraries for seamless audio and video calls, along with JWT tokens and bcrypt for secure user authentication.

## Features

- **Secure Login/Registration**: Passwords are securely hashed using bcrypt, and JWT tokens ensure authentication and authorization.
- **Real-Time Video Meetings**: Supports multiple participants, audio, video, chat, and screen sharing using Agora's real-time communication services.
- **Profile Management**: Users can view and manage their profiles, track past meetings, and schedule upcoming meetings.
- **Database Storage**: Data such as user information and meeting rooms are stored in MongoDB with Mongoose schemas for users and rooms.
  
## Project Structure

### Client (React)
```
client/
  ├── public/               # Static assets and index.html
  └── src/
      ├── components/       # Reusable React components (e.g., VideoChat, Profile, Login, Register)
      ├── pages/            # Main app pages (e.g., Home, Profile, Meeting Room)
      ├── services/         # API requests (e.g., AuthService, MeetingService)
      ├── App.js            # Main app component
      ├── index.js          # Entry point for React app
      └── styles/           # Global and component-specific styles
```

### Server (Node.js/Express)
```
server/
  ├── controllers/          # Functions to handle routes and logic (e.g., AuthController, MeetingController)
  ├── middleware/           # Custom middleware (e.g., JWT verification)
  ├── models/               # Mongoose models (e.g., User, Room)
  ├── routes/               # API routes (e.g., /auth, /meetings)
  ├── socket/               # WebSocket configurations for real-time interactions
  ├── .env                  # Environment variables (e.g., JWT secret, MongoDB URI)
  └── index.js              # Entry point for Express server
```

## Technologies Used

- **Front-end**: React.js, Axios for API requests, Agora SDK for real-time video/audio communication, CSS for styling.
- **Back-end**: Node.js, Express.js, JWT for authentication, bcrypt for password hashing, Socket.io for real-time communications.
- **Database**: MongoDB with Mongoose for schema-based data modeling.
- **Agora SDK**: Used for managing real-time voice and video features, including multi-member participation, screen sharing, and chat functionalities.

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/saadhussain01306/MeetVerse.git
   cd MeetVerse
   ```

2. **Install dependencies for both client and server**
   - For the client:
     ```bash
     cd client
     npm install
     ```
   - For the server:
     ```bash
     cd server
     npm install
     ```

3. **Set up environment variables**
   Create a `.env` file in the `server/` directory with the following variables:
   ```bash
   PORT=5000
   MONGO_URI=your_mongo_db_uri
   JWT_SECRET=your_jwt_secret
   AGORA_APP_ID=your_agora_app_id
   AGORA_APP_CERTIFICATE=your_agora_certificate
   ```

4. **Run the application**
   - Start the server:
     ```bash
     cd server
     npm run dev
     ```
   - Start the client:
     ```bash
     cd client
     npm start
     ```

## API Endpoints

### Authentication
- **POST** `/auth/register`: Registers a new user.
- **POST** `/auth/login`: Authenticates and returns a JWT token.

### Meetings
- **GET** `/meetings`: Retrieves all meetings.
- **POST** `/meetings/create`: Creates a new meeting.
- **GET** `/meetings/:id`: Retrieves details of a specific meeting.

### Profile
- **GET** `/profile`: Retrieves user profile and past meeting details.

## Security

- Passwords are hashed using `bcrypt` before storing in the database.
- JWT tokens are used for secure authentication and authorization.

## Future Enhancements

- Implement notification system for upcoming meetings.
- Add support for recording meetings.
- Introduce video quality adjustment based on network bandwidth.
  
## License

This project is licensed under the MIT License.
