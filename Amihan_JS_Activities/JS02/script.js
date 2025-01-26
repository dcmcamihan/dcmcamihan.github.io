document.addEventListener("DOMContentLoaded", () => {
    const todosList = document.getElementById("todosList");
    const txtTask = document.getElementById("txtTask");
    const btnAddTask = document.getElementById("btnAddTask");

    let todos = [];

    btnAddTask.addEventListener("click", () => {
        const task = txtTask.value.trim();
        if (task) {
            todos.push(task);
            txtTask.value = "";
            updateTodosList();
        }
    });

    function updateTodosList() {
        todosList.innerHTML = todos.map(task => `<li>${task}</li>`).join("");
    }
});