function loadTasks() {
  try {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  } catch (error) {
    return [];
  }
}

function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

let tasks = loadTasks();
tasks.push({ id: Date.now(), title: "Learn JavaScript", completed: false });
saveTasks(tasks);

console.log(tasks);
