function welcome(username = "Guest", courseName = "JavaScript") {
  return `Welcome ${username} to ${courseName}!`;
}

console.log(welcome());
console.log(welcome("Tahir", "Full Stack Development"));
