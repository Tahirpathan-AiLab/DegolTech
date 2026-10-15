function calculate(a, b, operation) {
  return operation(a, b);
}

console.log(calculate(10, 5, (x, y) => x + y));
console.log(calculate(10, 5, (x, y) => x - y));
console.log(calculate(10, 5, (x, y) => x * y));
