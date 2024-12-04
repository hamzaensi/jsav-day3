define([], function () {
    return {
        renderTasks: function (tasks, onDelete) {
            const taskList = document.getElementById("task-list");
            taskList.innerHTML = "";

            tasks.forEach((task, index) => {
                const li = document.createElement("li");
                li.textContent = task;

                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete";
                deleteButton.addEventListener("click", () => onDelete(index));

                li.appendChild(deleteButton);
                taskList.appendChild(li);
            });
        }
    };
});
