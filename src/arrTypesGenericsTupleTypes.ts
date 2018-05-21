let atgttToppings: Array<string>;

atgttToppings = ["pepperoni", "tomato", "bacon"];

// tuple type
let atgttPizza: [string, number];

atgttPizza = ["Peperoni", 20];

// types
type atgttSize = "small" | "medium" | "large";

let atgttPizzaSize: atgttSize = "small";

type f_atgttSelectSize = (size: atgttSize) => void;

const atgttSelectSize: f_atgttSelectSize = size => (atgttPizzaSize = size);
