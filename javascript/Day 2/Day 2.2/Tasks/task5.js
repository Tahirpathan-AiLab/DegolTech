function processNumbers(numbers, callback) {
  return numbers.map(callback);
}

const numbers = [1, 2, 3, 4];
const doubledNumbers = processNumbers(numbers, number => number * 2);

console.log(doubledNumbers);
