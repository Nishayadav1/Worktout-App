const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const workoutRoutes = require('./routes/workout');


const app = express();

// Middleware
app.use(cors()); // Enable CORS to allow cross-origin requests
app.use(express.json()); // Middleware to parse JSON request bodies

// Routes
app.use('/api/workouts', workoutRoutes); // API route for workout-related requests
// app.use('/api/addworkouts', workoutRoutes); // API route for workout-related requests


// MongoDB Connection
const mongoURI = 'mongodb://localhost:27017/workout-tracker';
// const mongoURI = 'mongodb+srv://nishayadav22:nisha8130@cluster0.ksywd.mongodb.net/workout-tracker';   //'nisha8130'

mongoose.connect(mongoURI, {
    useNewUrlParser: true, // Deprecated in v4.0.0, but still supported for now
    useUnifiedTopology: true, // Deprecated in v4.0.0, but still supported for now
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit the app if connection fails
});

// Global error handler for MongoDB connection failures
mongoose.connection.on('error', err => {
    console.error('MongoDB connection error:', err);
});

// Start server
const PORT = process.env.PORT || 5000; // Allow using environment variable for PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Graceful shutdown on process termination
process.on('SIGINT', async () => {
    console.log('Shutting down gracefully...');
    await mongoose.connection.close(); // Close MongoDB connection on shutdown
    process.exit(0); // Exit process
});
