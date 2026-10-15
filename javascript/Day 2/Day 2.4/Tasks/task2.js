// Section B: Predict the output
function outer() {
  let value = 5;
  return () => ++value;
}

const counter = outer();
console.log(counter()); // 6
console.log(counter()); // 7

const numbers = [1, 2, 3];
const tripledNumbers = numbers.map(number => number * 3);
console.log(tripledNumbers); // [3, 6, 9]

const values = [10, 20, 30, 40];
console.log(values.filter(value => value >= 30)); // [30, 40]

const moreValues = [4, 8, 12];
console.log(moreValues.find(value => value > 5)); // 8

function run(callback) {
  console.log("A");
  callback();
  console.log("C");
}

run(() => console.log("B")); // A, B, C
