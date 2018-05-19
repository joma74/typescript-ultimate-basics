let vNSelectedTopping: string = "pepperoni";

function vNSelectTopping(topping: string): void {
  vNSelectedTopping = topping;
}

vNSelectTopping("bacon");

console.log(vNSelectedTopping);
/**
 * When a function is throw-only, it gets the type never if it's an expression, and void if it's a declaration.
 * void is within the recognoized types.
 * @param error
 */
function vNFnDeclarartion(error: string) {
  throw new Error(error);
}

let vNA = vNFnDeclarartion("Something went wrong");

/**
 * When a function is throw-only, it gets the type never if it's an expression, and void if it's a declaration.
 * never is within the recognoized types.
 */
let vNFnExpression = (error: string) => {
  throw new Error(error);
};

let vNB = vNFnExpression("Something went wrong");
