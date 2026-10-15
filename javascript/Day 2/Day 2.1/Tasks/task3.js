function createCounter() {
  let count = 10;

  return function () {
    count = count + 2;
    console.log(count);
  };
}

const counter = createCounter();
counter();
counter();
counter();
