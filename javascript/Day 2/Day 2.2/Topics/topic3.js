// display is a higher-order function because it accepts a function.
function greet(name) {
  return "Hello " + name;
}

function display(callback) {
  console.log(callback("Rahil"));
}

display(greet);
