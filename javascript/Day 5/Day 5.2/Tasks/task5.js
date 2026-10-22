const products = [
  { name: "Pen", price: 10 },
  { name: "Book", price: 80 },
  { name: "Bag", price: 500 }
];

const totalPrice = products.reduce((total, product) => total + product.price, 0);

console.log(totalPrice);
