function third() {
  console.log("Third");
  
}

function second() {
  console.log("Second");
  third();
  console.log("Second finished");
}

function first() {
  console.log("First");
  second();
  console.log("First finished");
}

first();
