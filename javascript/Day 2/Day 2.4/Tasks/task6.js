// Section F: Viva answers
const vivaAnswers = [
  "A closure is an inner function that remembers variables from its outer function, like a counter that remembers its count.",
  "map() changes each item and returns a new array. filter() returns a new array containing items that pass a condition.",
  "find() returns the first matching item. filter() returns an array containing all matching items.",
  "A callback lets a function run code provided to it, so the function can be reused with different behavior.",
  "calculate(2, 3, (a, b) => a + b) is a higher-order function example because calculate accepts another function."
];

for (let i = 0; i < vivaAnswers.length; i++) {
  console.log("Viva " + (i + 1) + ": " + vivaAnswers[i]);
}
