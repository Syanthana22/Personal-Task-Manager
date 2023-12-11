document.addEventListener("DOMContentLoaded", function () {
    displayTasks();
});

function displayTasks() {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.sort(compareDates); // Sort tasks by date
    var viewtasksBody = document.getElementById("viewtasks-body");
    viewtasksBody.innerHTML = "";

    tasks.forEach(function (task, index) {
        var row = viewtasksBody.insertRow();
        var cellDate = row.insertCell(0);
        var cellName = row.insertCell(1);
        var cellCompleted = row.insertCell(2);
        var cellActions = row.insertCell(3);

        cellDate.textContent = task.date;
        cellName.textContent = task.name;

        // Add a checkbox for each task
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed || false; // Default to false if not set
        checkbox.addEventListener("change", function () {
            toggleCompleted(index);
        });

        cellCompleted.appendChild(checkbox);

        // Add space between "Completed" and "Action" columns
        cellCompleted.appendChild(document.createTextNode(" "));

        // Add an "Edit" button to each row
        var editButton = createButton("Edit", function () {
            editTask(index);
        });

        // Add space between "Edit" and "Delete" buttons
        cellActions.appendChild(editButton);
        cellActions.appendChild(document.createTextNode(" "));

        // Add a "Delete" button to each row
        var deleteButton = createButton("Delete", function () {
            deleteTask(index);
        });

        cellActions.appendChild(deleteButton);
    });
}

function createButton(text, clickHandler) {
    var button = document.createElement("button");
    button.textContent = text;
    button.addEventListener("click", clickHandler);
    return button;
}

function editTask(index) {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    var editedTask = tasks[index];

    // Get new values for task name and date
    var newTaskDate = prompt("Edit Task Date (YYYY-MM-DD):", editedTask.date);
    var newTaskName = prompt("Edit Task Name:", editedTask.name);
    

    if (newTaskName !== null && newTaskDate !== null) {
        editedTask.name = newTaskName;
        editedTask.date = newTaskDate;

        localStorage.setItem("tasks", JSON.stringify(tasks));
        displayTasks(); // Refresh the displayed tasks after editing
    }
}

function deleteTask(index) {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    var confirmation = confirm("Are you sure you want to delete this task?");

    if (confirmation) {
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        displayTasks(); // Refresh the displayed tasks after deletion
    }
}

function toggleCompleted(index) {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks(); // Refresh the displayed tasks after toggling completion
}

function compareDates(a, b) {
    // Convert date strings to Date objects for comparison
    var dateA = new Date(a.date);
    var dateB = new Date(b.date);

    return dateA - dateB;
}
function toggleCompleted(index) {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Toggle the completed state
    tasks[index].completed = !tasks[index].completed;

    // If the task is marked as completed, remove the corresponding row
    if (tasks[index].completed) {
        var viewtasksBody = document.getElementById("viewtasks-body");
        viewtasksBody.deleteRow(index);
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
}
