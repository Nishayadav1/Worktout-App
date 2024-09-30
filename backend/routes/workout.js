const express = require('express');
const { getWorkouts, addWorkout } = require('../controllers/workoutController');
const router = express.Router();

router.get('/', getWorkouts);    // GET all workouts
router.post('/addworkout', addWorkout);    // POST a new workout

module.exports = router;
