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

// casting 

type atgttOType_Pizza = { name: string, toppings: number };

const atgttO_Pizza: atgttOType_Pizza = {
  name: "Pepperoni",
  toppings: 4
};

// casting with <template>
const atgttSerialized = JSON.stringify(atgttO_Pizza);

function getNameFromJSON1(json: string): string {
  return (<atgttOType_Pizza>JSON.parse(json)).name;
}

console.log(getNameFromJSON1(atgttSerialized));

// casting with "as"
function getNameFromJSON2(json: string): string {
    return (JSON.parse(json) as atgttOType_Pizza).name;
  }
  
  console.log(getNameFromJSON2(atgttSerialized));
