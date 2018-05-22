interface iSizes {
  sizes: string[]
}

interface iPizza extends iSizes {
  name: string
  getAvailableSizes(): string[]
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

intfPizza = createPizza("Pepproni", ["small", "medium"])

console.log(intfPizza)

console.log(intfPizza.getAvailableSizes())
