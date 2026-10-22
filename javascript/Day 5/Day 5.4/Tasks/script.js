const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

function loadTasks() {
  try {
    const savedTasks = localStorage.getItem("day5TaskManager");
    if (!savedTasks) return [];

    const tasks = JSON.parse(savedTasks);
    return Array.isArray(tasks) ? tasks : [];
  } catch (error) {
    return [];
  }
}

let tasks = loadTasks();

function saveTasks() {
  localStorage.setItem("day5TaskManager", JSON.stringify(tasks));
}

function displayTasks() {
  taskList.replaceChildren();

  tasks.forEach(task => {
    const item = document.createElement("li");
    const checkbox = document.createElement("input");
    const title = document.createElement("span");
    const deleteButton = document.createElement("button");

    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.setAttribute("aria-label", `Complete ${task.title}`);
    checkbox.addEventListener("change", () => toggleTask(task.id));

    title.textContent = task.title;
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteTask(task.id));

    if (task.completed) item.classList.add("completed");

    item.append(checkbox, title, deleteButton);
    taskList.append(item);
  });
}

function addTask(title) {
  const cleanTitle = title.trim();
  if (!cleanTitle) return;

  tasks.push({ id: Date.now(), title: cleanTitle, completed: false });
  saveTasks();
  displayTasks();
}

function toggleTask(id) {
  tasks = tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
  saveTasks();
  displayTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveTasks();
  displayTasks();
}

taskForm.addEventListener("submit", event => {
  event.preventDefault();
  addTask(taskInput.value);
  taskInput.value = "";
  taskInput.focus();
});

displayTasks();
