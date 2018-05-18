const saToppings = ["bacon", "chilli"];

const newSaToppings = ["pepperoni"];
/**
 * When using spread, you are expanding a single variable into more
 */
const allSaToppings = [...saToppings, ...newSaToppings];

console.log(allSaToppings);

// Example #1 — Inserting Arrays

let mid = [3, 4];
let arr = [1, 2, mid, 5, 6];

console.log(arr);

// the spread syntax allows the elements of our array to expand.
let saArrSpread = [1, 2, ...mid, 5, 6];

console.log(saArrSpread);

// Example #2 — Math

// But no array possible
console.log(Math.max(100, 3, 4));

var saArrMathMax = [2, 4, 8, 6, 0];
console.log(Math.max(...saArrMathMax));

// Two arrays ...
var saArrShallow = ["a", "b", "c"];
var saArrShallow2 = saArrShallow;

saArrShallow2.push("d");
// Both are affected
console.log(saArrShallow);
console.log(saArrShallow2);

// Again, two arrays ...
var saArrDeep = ["a", "b", "c"];
var saArrDeep2 = [...saArrDeep];

saArrDeep2.push("d");
// Both are not affected when spread
console.log(saArrDeep);
console.log(saArrDeep2);

// Example #3 String to array
var saStr = "hello"
var saChars = [...saStr];
console.log(saChars);