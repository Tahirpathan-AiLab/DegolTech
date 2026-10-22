function loadTasks() {
  try {
    const savedTasks = localStorage.getItem("day5Tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  } catch (error) {
    return [];
  }
}

function saveTasks() {
  localStorage.setItem("day5Tasks", JSON.stringify(tasks));
}

function displayTasks() {
  console.log(tasks);
}

function addTask(title) {
  if (!title.trim()) return;
  tasks.push({ id: Date.now(), title: title.trim(), completed: false });
  saveTasks();
  displayTasks();
}

function completeTask(id) {
  tasks = tasks.map(task => task.id === id ? { ...task, completed: true } : task);
  saveTasks();
  displayTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveTasks();
  displayTasks();
}

let tasks = loadTasks();
addTask("Learn JavaScript");
