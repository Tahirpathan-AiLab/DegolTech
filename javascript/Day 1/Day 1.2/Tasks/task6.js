function calculateTotal(price, quantity) {
  const total = price * quantity;
  return total;
}

const bill = calculateTotal(500, 3);
console.log("Total bill:", bill);
