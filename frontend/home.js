// const form = document.getElementById('workoutForm');
// const historyList = document.getElementById('historyList');

// // Fetch workouts on page load
// document.addEventListener('DOMContentLoaded', fetchWorkouts);

// form.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const type = document.getElementById('type').value;
//     const duration = document.getElementById('duration').value;
//     const intensity = document.getElementById('intensity').value;

//     const workout = { type, duration, intensity };

//     try {
//         const res = await fetch('http://localhost:5000/api/workouts', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(workout)
//         });
//         const newWorkout = await res.json();
//         displayWorkout(newWorkout);
//         form.reset();
//     } catch (error) {
//         console.error('Error adding workout:', error);
//     }
// });

// // Fetch and display all workouts
// async function fetchWorkouts() {
//     try {
//         const res = await fetch('http://localhost:5000/api/workouts');
//         // console.log(res, "jjjjjjjjjjjjjjjjjjj")
//         const workouts = await res.json();
//         console.log(workouts, "mmmmmmmmmmmmmm");
        
//         workouts.forEach(displayWorkout);
//     } catch (error) {
//         console.error('Error fetching workouts:', error);
//     }
// }

// // Display a workout in the list
// function displayWorkout(workout) {
//     const li = document.createElement('li');
//     li.textContent = `${workout.type}: ${workout.duration} mins, ${workout.intensity} intensity, ${workout.caloriesBurned} calories burned`;
//     historyList.appendChild(li);
// }



form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form values
    const type = document.getElementById('type').value;
    const duration = parseFloat(document.getElementById('duration').value);  // Ensure it's a number
    const intensity = document.getElementById('intensity').value;

    // Calculate calories burned based on intensity and duration (as an example)
    let caloriesBurned = 0;
    if (intensity === 'low') {
        caloriesBurned = duration * 5;  // Low intensity burns 5 calories per minute
    } else if (intensity === 'medium') {
        caloriesBurned = duration * 8;  // Medium intensity burns 8 calories per minute
    } else if (intensity === 'high') {
        caloriesBurned = duration * 12; // High intensity burns 12 calories per minute
    }

    const workout = { type, duration, intensity, caloriesBurned }; // Now it includes caloriesBurned

    try {
        // Send POST request to server
        const res = await fetch('http://localhost:5000/api/workouts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(workout)
        });

        const newWorkout = await res.json();
        displayWorkout(newWorkout);  // Display the new workout in the list
        updateTotalCalories(newWorkout.caloriesBurned); // Update total calories burned

        form.reset();  // Reset the form after submission
    } catch (error) {
        console.error('Error adding workout:', error);
    }
});


async function fetchWorkouts() {
    try {
        const res = await fetch('http://localhost:5000/api/workouts');
        const workouts = await res.json();
        console.log('Fetched workouts:', workouts);  // Check if the workouts are fetched correctly

        workouts.forEach(workout => {
            displayWorkout(workout);  // Display each workout
            updateTotalCalories(workout.caloriesBurned); // Add to total calories
        });
    } catch (error) {
        console.error('Error fetching workouts:', error);
    }
}


function displayWorkout(workout) {
    console.log('Displaying workout:', workout);  // Check if the workout is passed correctly

    const li = document.createElement('li');
    li.textContent = `${workout.type}: ${workout.duration} mins, ${workout.intensity} intensity, ${workout.caloriesBurned} calories burned`;
    historyList.appendChild(li);
}
