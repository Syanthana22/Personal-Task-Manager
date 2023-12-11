// Check if there is any existing user data in localStorage
// If not, initialize an empty array
let users = JSON.parse(localStorage.getItem('users')) || [];

function registerUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the username is already taken
    if (users.some(user => user.username === username)) {
        alert("This username is already taken. Please choose another username.");
        return;
    }

    // Add the new user to the array
    const newUser = { username, password };
    users.push(newUser);

    // Store the updated user array in localStorage
    localStorage.setItem('users', JSON.stringify(users));

    alert("Registration successful. You can now login.");

    // Redirect to the login page
    window.location.href = 'login.html';
}
