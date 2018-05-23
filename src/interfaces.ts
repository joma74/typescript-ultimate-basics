interface iSizes {
  sizes: string[]
}

interface iPizza extends iSizes {
  name: string
  toppings?: number
  getAvailableSizes(): string[]
  [key: number]: string
}

interface Pizzas {
  data: iPizza[]
}

let intfPizza: iPizza

function createPizza(name: string, sizes: string[]): iPizza {
  return {
    name,
    sizes,
    getAvailableSizes() {
      return this.sizes
    },
  }
}

intfPizza = createPizza("Pepperoni", ["small", "medium"])

console.log(intfPizza)

console.log(intfPizza.getAvailableSizes())

intfPizza.toppings = 2
intfPizza[0] = "value"

console.log(intfPizza)
