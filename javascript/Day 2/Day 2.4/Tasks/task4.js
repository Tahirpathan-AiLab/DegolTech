// Section D: Coding exercises
function createCounter() {
  let count = 0;

  return function () {
    count = count + 2;
    return count;
  };
}

const counter = createCounter();
console.log(counter());
console.log(counter());

function calculate(a, b, callback) {
  return callback(a, b);
}

console.log(calculate(10, 5, (a, b) => a + b));

const prices = [100, 200, 500];
const pricesWithGST = prices.map(price => price * 1.18);
console.log(pricesWithGST);

const users = [
  { name: "Asha", active: true },
  { name: "Ravi", active: false },
  { name: "Neha", active: true }
];

const activeUsers = users.filter(user => user.active === true);
console.log(activeUsers);
