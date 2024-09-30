
# Workout Tracker App

This is a simple workout tracker app that allows users to log and track their daily exercises, view workout history, and monitor statistics like total calories burned.

## Features
- **Log Workouts:** Users can input details about their workout, including type, duration, and intensity.
- **Track Progress:** The app stores workout data using Express.js and MongoDB, making it easy to retrieve and display workout history.
- **Workout History & Stats:** Users can view their workout history and statistics, such as total calories burned, via the frontend.
- **Frontend & API Integration:** A simple frontend UI interacts with the backend, using Fetch API to handle API requests.

## Tech Stack
- **Frontend:** HTML, CSS, Bootstrap, JavaScript (Fetch API)
- **Backend:** Express.js
- **Database:** MongoDB
- **Hosting:** Vercel (for frontend), MongoDB Atlas (for database)

## Setup Instructions
1. **Install Dependencies:**
   - Run `npm install` to install backend dependencies.

2. **Set up MongoDB:**
   - Set up a MongoDB database and provide the connection string in a `.env` file as `MONGODB_URI`.

3. **Run the Backend:**
   - Use `node app.js` or `npm start` to start the server.

4. **Frontend Interaction:**
   - The frontend HTML and CSS files are ready to use. They interact with the backend to log workouts and display the workout history.

## API Endpoints
- **POST /api/workouts:** Add a new workout
- **GET /api/workouts:** Fetch workout history
- **GET /api/stats:** Fetch statistics (total calories burned)

## Usage
- **Add Workout:** Enter the workout details (type, duration, and intensity) and submit to log it.
- **View History:** The app will display logged workouts and provide statistics on total calories burned.

## Notes
- Ensure that the server is running for the frontend to properly interact with the backend via API requests.
SignUp Page : 
![image](https://github.com/user-attachments/assets/3c1d6794-f010-48aa-a564-eccfcd26f783)

SignIn Page : 
![image](https://github.com/user-attachments/assets/42f26fb0-2ca2-42fc-8d18-856be0668bb0)

Home Page : 
![image](https://github.com/user-attachments/assets/54c1533e-cf57-4491-9d30-c4f785f7defc)

