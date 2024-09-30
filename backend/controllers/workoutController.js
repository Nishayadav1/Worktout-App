const Workout = require('../models/Workout');

// Get all workouts
exports.getWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find();
        res.json(workouts);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching workouts' });
    }
};

// Add a workout
exports.addWorkout = async (req, res) => {
    console.log(req.body); // Log incoming data

    const { type, duration, intensity } = req.body;
    if (!type || !duration || !intensity) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const caloriesBurned = duration * (intensity === 'high' ? 10 : 5);

    try {
        const newWorkout = new Workout({ type, duration, intensity, caloriesBurned });
        const savedWorkout = await newWorkout.save();
        console.log(savedWorkout, "savedWorkout");
        
        res.status(201).json(savedWorkout); // Respond with created workout
    } catch (err) {
        console.error('Error saving workout:', err); // Log detailed error
        res.status(500).json({ error: 'Error adding workout' });
    }
};
