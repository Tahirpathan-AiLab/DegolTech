const prices = [500, 100, 900, 300];
const ascendingPrices = [...prices].sort((a, b) => a - b);
const descendingPrices = [...prices].sort((a, b) => b - a);

console.log(ascendingPrices);
console.log(descendingPrices);
console.log(prices);
