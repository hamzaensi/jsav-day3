define([], function () {
    let tasks = [];

    return {
        getTasks: function () {
            return tasks;
        },
        addTask: function (task) {
            tasks.push(task);
        },
        removeTask: function (index) {
            tasks.splice(index, 1);
        }
    };
});
