function first() {
  console.log("First starts");
  second();
  console.log("First ends");
}

function second() {
  console.log("Second runs");
}

first();
