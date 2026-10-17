const car = {
  brand: "Honda",
  model: "City",
  start() {
    console.log(this.brand + " " + this.model + " is starting");
  }
};

car.start();
