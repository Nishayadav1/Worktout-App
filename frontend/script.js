// Elements for Sign Up and Sign In buttons
const signupButton = document.getElementById('signup-button');
const signinButton = document.getElementById('signin-button');

// Elements for Sign Up and Sign In forms
const signupFormContainer = document.getElementById('signup-form');
const signinFormContainer = document.getElementById('signin-form');

// Toggle Sign Up form display
signupButton.addEventListener('click', () => {
    signupFormContainer.classList.add('active');
    signinFormContainer.classList.remove('active');
});

// Toggle Sign In form display
signinButton.addEventListener('click', () => {
    signinFormContainer.classList.add('active');
    signupFormContainer.classList.remove('active');
});

// Auto show Sign Up form if no user is logged in (example logic)
document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('isLoggedIn')) {
        // Show Sign Up form by default
        signupFormContainer.classList.add('active');
    } else {
        // Show Sign In form if user is already logged in
        signinFormContainer.classList.add('active');
    }
});

// Handle Sign Up form submission
document.getElementById('signup').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name-signup').value;
    const email = document.getElementById('email-signup').value;
    const password = document.getElementById('password-signup').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Simple validation
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Store user details in localStorage
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    localStorage.setItem('isLoggedIn', 'true');

    alert('Sign Up successful!');
    window.location.href = 'home.html'; // Redirect to home page
});

// Handle Sign In form submission
document.getElementById('signin').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email-signin').value;
    const password = document.getElementById('password-signin').value;

    // Retrieve stored user details
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    // Simple authentication
    if (email === storedEmail && password === storedPassword) {
        localStorage.setItem('isLoggedIn', 'true');
        alert('Sign In successful!');
        window.location.href = 'home.html'; // Redirect to home page
    } else {
        alert('Invalid email or password! Please sign up first.');
    }
});
