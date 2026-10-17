const products = [
  { name: "Pen", price: 20, quantity: 3 },
  { name: "Notebook", price: 60, quantity: 2 }
];

const firstTotal = products[0].price * products[0].quantity;
const secondTotal = products[1].price * products[1].quantity;
const total = firstTotal + secondTotal;

console.log(`Total: ${total}`);
