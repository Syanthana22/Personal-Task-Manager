function addTask() {
    var taskName = document.getElementById("taskName").value;
    var taskDate = document.getElementById("taskDate").value;

    if (taskName && taskDate) {
        var task = {
            name: taskName,
            date: taskDate
        };

        saveTask(task);
        clearForm();
    } else {
        alert("Please enter both task name and date.");
    }
}

function saveTask(task) {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function clearForm() {
    document.getElementById("taskName").value = "";
    document.getElementById("taskDate").value = "";
}
