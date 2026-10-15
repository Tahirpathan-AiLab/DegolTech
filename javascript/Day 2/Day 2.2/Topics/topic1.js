// A callback is a function passed to another function.
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function showMessage() {
  console.log("Welcome to the internship!");
}

greet("Aarav", showMessage);
