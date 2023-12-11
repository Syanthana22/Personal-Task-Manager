function loginUser() {
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Fetch user data from the database (replace with backend logic)
    const storedUser = getUserFromDatabase(loginUsername);

    if (storedUser && storedUser.password === loginPassword) {
        // Store the logged-in user in localStorage
        localStorage.setItem('loggedInUser', JSON.stringify(storedUser));

        // Redirect to the dashboard
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

function getUserFromDatabase(username) {
    // Replace this with your actual database logic
    // For simplicity, assume a predefined user
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.find(user => user.username === username);
}

function submitForm(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Fetch the entered username and password
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    // Perform validation (replace with your database logic)
    const isValidUser = checkCredentials(enteredUsername, enteredPassword);

    if (!isValidUser) {
        alert('Invalid username or password. Please try again.');
        return;
    }

    // If validation is successful, navigate to the dashboard
    window.location.href = 'dashboard.html';
}

function checkCredentials(username, password) {
    // Replace this with your actual database logic
    // For simplicity, assume a predefined username and password
    const validUsername = 'sampleUser';
    const validPassword = 'samplePassword';

    return username === validUsername && password === validPassword;
}
