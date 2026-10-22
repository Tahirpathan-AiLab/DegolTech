function loadTasks() {
  try {
    const savedTasks = localStorage.getItem("day5SavedTasks");
    if (!savedTasks) return [];

    const tasks = JSON.parse(savedTasks);
    return Array.isArray(tasks) ? tasks : [];
  } catch (error) {
    return [];
  }
}

console.log(loadTasks());
