console.log("First message");

setTimeout(function () {
  console.log("Second message from setTimeout");
}, 1000);

console.log("Third message");

// Output order: First, Third, then Second after one second.
