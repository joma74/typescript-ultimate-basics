const soPizza = {
  name: "Pepperoni"
};

const soToppings = ["pepperoni"];

const soOrder = {
  ...soPizza,
  soToppings
};

// ​​​​​{ name: 'Pepperoni', soToppings: [ 'pepperoni' ] }​​​​​
console.log(soOrder);

// not exact order; array desctructured -> ​​​​​{ '0': 'pepperoni', name: 'Pepperoni' }​​​​​
console.log(Object.assign({}, soPizza, soToppings));
// but this one does -> ​​​​​{ name: 'Pepperoni', soToppings: [ 'pepperoni' ] }​​​​​
console.log(Object.assign({}, soPizza, { soToppings }));
