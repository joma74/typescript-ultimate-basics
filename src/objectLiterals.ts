const olPizza = {
  name: "Pepperoni",
  price: 15,
  getName: function() {
    return this.name;
  },
  getUpperCaseName() {
    return this.name.toUpperCase();
  }
};

console.log(olPizza.getName());

console.log(olPizza.getUpperCaseName());

const olToppings = ["pepperonis"];

const order = { olPizza, olToppings };

console.log(order);

function createOrder(pizza: object, toppings: object) {
  return { pizza, toppings };
}

console.log(createOrder(olPizza, olToppings));

const olPizzas = [
  {
    name: "Pepperoni",
    toppings: ["pepperonis"]
  }
];

const olMappedPizzas = olPizzas.map(
  (pizza, index) => `No#${index} favorite pizza is ${pizza.name.toUpperCase()}`
);

console.log(olMappedPizzas);
