function multiplyBy(number) {
  return function (value) {
    return value * number;
  };
}

const multiplyBy3 = multiplyBy(3);
console.log(multiplyBy3(5));
