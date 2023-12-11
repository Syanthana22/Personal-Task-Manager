document.addEventListener("DOMContentLoaded", function () {
    displayCompletedTasks();
});

function displayCompletedTasks() {
    var completedTasks = getCompletedTasks();
    var completedTasksBody = document.getElementById("completedtasks-body");
    completedTasksBody.innerHTML = "";

    completedTasks.forEach(function (task, index) {
        var row = completedTasksBody.insertRow();
        var cellDate = row.insertCell(0);
        var cellName = row.insertCell(1);

        cellDate.textContent = task.date;
        cellName.textContent = task.name;
    });
}

function getCompletedTasks() {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    return tasks.filter(function (task) {
        return task.completed === true;
    });
}
