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
//         const res = await fetch('http://localhost:5000/api/workouts/addworkout', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(workout)
//         });
//         const newWorkout = await res.json();
// console.log("newWorkout", newWorkout);

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

// -----------------------------------------------------------------

const form = document.getElementById('workoutForm');
const historyList = document.getElementById('historyList');
const totalCaloriesElement = document.getElementById('totalCalories');
let totalCalories = 0; // Variable to keep track of total calories

// Fetch workouts on page load
document.addEventListener('DOMContentLoaded', fetchWorkouts);

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const type = document.getElementById('type').value;
    const duration = document.getElementById('duration').value;
    const intensity = document.getElementById('intensity').value;

    const workout = { type, duration, intensity };

    try {
        const res = await fetch('http://localhost:5000/api/workouts/addworkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(workout)
        });
        const newWorkout = await res.json();

        displayWorkout(newWorkout);
        form.reset();
    } catch (error) {
        console.error('Error adding workout:', error);
    }
});

// Fetch and display all workouts
async function fetchWorkouts() {
    try {
        const res = await fetch('http://localhost:5000/api/workouts');
        const workouts = await res.json();
        
        workouts.forEach(displayWorkout);
    } catch (error) {
        console.error('Error fetching workouts:', error);
    }
}

// Display a workout in the list and update total calories
function displayWorkout(workout) {
    const li = document.createElement('li');
    li.textContent = `${workout.type}: ${workout.duration} mins, ${workout.intensity} intensity, ${workout.caloriesBurned} calories burned`;
    historyList.appendChild(li);

    // Update total calories
    totalCalories += workout.caloriesBurned;
    totalCaloriesElement.textContent = `Total Calories Burned: ${totalCalories}`;
}


// -----------------------------------------------------------



