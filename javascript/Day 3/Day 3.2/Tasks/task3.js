const order = {
  item: "Keyboard",
  quantity: 2,
  price: 1500,
  getTotal() {
    return this.quantity * this.price;
  }
};

console.log(order.getTotal());
