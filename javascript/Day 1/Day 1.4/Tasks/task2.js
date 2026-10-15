let city = "Anand";

function showCity() {
  let city = "Surat";
  console.log(city);
}

showCity();
console.log(city);

console.log("Hoisting output:");
console.log(price);
var price = 500;
console.log(price);

function calculate(a, b) {
  console.log(a + b);
}

const result = calculate(10, 20);
console.log(result);

function first() {
  console.log("A");
  second();
  console.log("B");
}

function second() {
  console.log("C");
}

first();

let marks = 60;

if (true) {
  let marks = 90;
  console.log(marks);
}

console.log(marks);
