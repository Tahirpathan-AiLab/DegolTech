function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`.trim();
}

function isEven(number) {
  return Number.isInteger(number) && number % 2 === 0;
}

function getLargest(a, b, c) {
  return Math.max(a, b, c);
}

function calculateDiscount(price, percentage) {
  if (price < 0 || percentage < 0 || percentage > 100) {
    return null;
  }

  return price - (price * percentage) / 100;
}

console.log(getFullName("Tahir", "Patel"));
console.log(isEven(22));
console.log(getLargest(12, 25, 8));
console.log(calculateDiscount(1000, 10));
