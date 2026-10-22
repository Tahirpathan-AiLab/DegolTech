const tasks = ["Learn JavaScript", "Practice React"];
localStorage.setItem("day5WorkbookTasks", JSON.stringify(tasks));

const savedTasks = JSON.parse(localStorage.getItem("day5WorkbookTasks") ?? "[]");

console.log(savedTasks);
