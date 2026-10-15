// A nested function can access a variable from its outer function.
function outer() {
  const name = "Rahil";

  function inner() {
    console.log("Hello " + name);
  }

  inner();
}

outer();
