const doPizza = {
  name: "Pepperoni",
  toppings: ["pepperoni"]
};

function doOrder({ name: pizzaName, toppings }: {name: string, toppings: string[]}) {
    console.log(pizzaName);
    console.log(toppings);
    return pizzaName + toppings;
}

console.log(doOrder(doPizza));

const doToppings = ['pepperoni', 'bacon', 'chilli'];
