const products = [
  { name: "Pen", price: 10, quantity: 5 },
  { name: "Book", price: 80, quantity: 2 },
  { name: "Bag", price: 500, quantity: 1 }
];

const totalCost = products.reduce((total, product) => total + product.price * product.quantity, 0);

console.log(totalCost);
