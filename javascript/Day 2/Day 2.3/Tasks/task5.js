const products = [
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1500 },
  { name: "Headphones", price: 800 }
];

const affordableProductNames = products
  .filter(product => product.price < 1000)
  .map(product => product.name);

console.log(affordableProductNames);
