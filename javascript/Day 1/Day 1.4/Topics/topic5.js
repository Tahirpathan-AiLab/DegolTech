function calculateDiscount(price, percentage) {
  if (price < 0 || percentage < 0 || percentage > 100) {
    return null;
  }

  return price - price * percentage / 100;
}

console.log(calculateDiscount(1000, 10));
console.log(calculateDiscount(1000, 120));
