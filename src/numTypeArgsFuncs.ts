let stafPizzaCost1 = 10;

let stafPizzaCost2: number = 10;
let stafPizzaToppings: number = 2;

function calculatePrice(cost: number, toppings: number): number {
    return cost + 1.5 * toppings;
}

const cost: number = calculatePrice(stafPizzaCost2, stafPizzaToppings);

console.log(`Pizza costs: $${cost}`);

