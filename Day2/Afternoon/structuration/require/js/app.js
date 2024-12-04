require(["data", "ui"], function (data, ui) {
    function refreshTasks() {
        const tasks = data.getTasks();
        ui.renderTasks(tasks, handleDeleteTask);
    }

    function handleAddTask() {
        const taskInput = document.getElementById("task-input");
        const task = taskInput.value.trim();
        if (task) {
            data.addTask(task);
            taskInput.value = "";
            refreshTasks();
        }
    }

    function handleDeleteTask(index) {
        data.removeTask(index);
        refreshTasks();
    }

    // Initialisation
    document.getElementById("add-task-btn").addEventListener("click", handleAddTask);
    refreshTasks();
});
