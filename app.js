function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const todoList = document.getElementById("todoList");
        const listItem = document.createElement("li");
        listItem.textContent = taskText;
        todoList.appendChild(listItem);
        taskInput.value = "";
    }
}