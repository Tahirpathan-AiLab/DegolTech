function greet(name = "Guest", course = "JavaScript") {
  return `Hello ${name}, welcome to ${course}.`;
}

console.log(greet());
console.log(greet("Asha", "React"));
