///<reference types="webpack-env" />

if (module.hot) {
   module.hot.accept()
}

console.log('Hey TypeScript!');

const pizzas = [
  {
    name: "Pepperoni",
    toppings: ["pepperoni"]
  }
];
