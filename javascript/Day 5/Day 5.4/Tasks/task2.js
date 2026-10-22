const products = [
  { name: "Pen", price: 10 },
  { name: "Book", price: 80 }
];

const productsJson = JSON.stringify(products);
const parsedProducts = JSON.parse(productsJson);

console.log(productsJson);
console.log(parsedProducts);
