console.log("Declaration, called early:", squareWithDeclaration(4));

function squareWithDeclaration(number) {
  return number * number;
}

const squareWithExpression = function (number) {
  return number * number;
};

console.log("Expression, called after initialization:", squareWithExpression(5));
