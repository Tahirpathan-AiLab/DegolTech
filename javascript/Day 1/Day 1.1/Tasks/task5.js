function calculateBill(price, quantity) {
  let total = price * quantity;

  return total;
}

const bill = calculateBill(500, 3);

console.log("Total Bill:", bill);