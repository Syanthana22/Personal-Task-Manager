document.addEventListener("DOMContentLoaded", function() {
    // Check if the user is logged in
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (!loggedInUser) {
        // If not logged in, redirect to the login page
        window.location.href = 'login.html';
    }

    // Display welcome message
    const dashboardDiv = document.getElementById('loggedInUser');
    dashboardDiv.textContent = loggedInUser;
});

function toggleNav() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

function navigateToTodoList() {
    window.location.href = 'todolist.html';
}
