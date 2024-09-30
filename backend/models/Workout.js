const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    type: { type: String, required: true },
    duration: { type: Number, required: true },
    intensity: { type: String, required: true },
    caloriesBurned: { type: Number },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Workout', workoutSchema);
