///<reference types="webpack-env" />

if (module.hot) {
  module.hot.accept();
}

const pizzas = [
  {
    name: "Pepperoni",
    toppings: ["pepperoni"]
  }
];

const mappedPizzas = pizzas.map(
  (pizza, index) => `No#${index} favorite pizza is ${pizza.name.toUpperCase()}`
);

console.log(mappedPizzas);

const pizza = {
  name: "Blazing inferno",
  getName() {
    console.log(this);
  }
};

console.log(pizza.getName());
