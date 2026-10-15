// The returned function remembers count after createCounter has finished.
function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
counter();
counter();
