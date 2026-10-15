function second() {
  console.log("Inside second");
}

function first() {
  console.log("Inside first");
  second();
  console.log("First finished");
}

first();
