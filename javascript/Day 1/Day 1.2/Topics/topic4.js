console.log("Square using declaration:", squareWithDeclaration(5));

function squareWithDeclaration(number) {
  return number * number;
}

const squareWithExpression = function (number) {
  return number * number;
};

console.log("Square using expression:", squareWithExpression(6));
