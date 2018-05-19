const doPizza = {
  name: "Pepperoni",
  toppings: ["pepperoni"]
};

function doOrder({
  name: pizzaName,
  toppings
}: {
  name: string;
  toppings: string[];
}) {
  console.log(pizzaName);
  console.log(toppings);
  return pizzaName + toppings;
}

console.log(doOrder(doPizza));

const doToppings = ["pepperoni", "bacon", "chilli"];

// destructuring into a virtual array...
const [first, second, third] = doToppings;
// ...where each item is assigned to a variable within
console.log(first, second, third);

function doLogToppings([first, second, third]: [any, any, any]) {
  console.log(first, second, third);
}

console.log(doToppings);
