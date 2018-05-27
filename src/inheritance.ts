interface itSizesItf {
  availableSizes: string[]
}

abstract class itSizes implements itSizesItf {
  constructor(protected sizes: string[]) {}

  // property setter
  set availableSizes(sizes: string[]) {
    this.sizes = sizes
  }
  // property getter
  get availableSizes() {
    return this.sizes
  }
}

// with abstract no longer possible -> new itSizes()

interface itPizzaItf extends itSizesItf {
  readonly name: string
  toppings: string[]
  updateSizes(sizes: string[]): void
  addTopping(topping: string): void
}

class itPizza extends itSizes implements itPizzaItf {
  public toppings: string[] = []

  constructor(readonly name: string, sizes: string[]) {
    super(sizes)
  }

  public updateSizes(sizes: string[]) {
    this.sizes = sizes
  }

  public addTopping(topping: string) {
    this.toppings.push(topping)
  }
}

const itPizaa = new itPizza("Peperoni", ["small", "medium"])

console.log(itPizaa)

itPizaa.updateSizes(["large"])

itPizaa.addTopping("cheese")

console.log(itPizaa.availableSizes)
