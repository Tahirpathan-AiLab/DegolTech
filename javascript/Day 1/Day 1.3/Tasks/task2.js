function calculateTotalDeclaration(price, quantity) {
  return price * quantity;
}

const calculateTotalExpression = function (price, quantity) {
  return price * quantity;
};

const calculateTotalArrow = (price, quantity) => price * quantity;

console.log(calculateTotalDeclaration(500, 3));
console.log(calculateTotalExpression(500, 3));
console.log(calculateTotalArrow(500, 3));
console.log("All three return 1500. A declaration is hoisted and can be called before its definition. An expression is stored in a variable and must be initialized before calling. An arrow function has shorter syntax and does not have its own this binding.");
