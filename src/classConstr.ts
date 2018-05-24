function ccPizza(name: string) {
  this.name = name
  this.toppings = []
}

ccPizza.prototype.addTopping = function addTopping(topping: string) {
  this.toppings.push(topping)
}

const ccPizaa = new ccPizza("Pepperoni")

ccPizaa.addTopping("Pepperoni")

console.log(ccPizaa)

class ccPizza2 {
  public name: string
  public toppings: string[] = []
  constructor(name: string) {
    this.name = name
  }
  public addTopping(topping: string) {
    this.toppings.push(topping)
  }
}

const ccPizaa2 = new ccPizza2("Pepperoni")

ccPizaa2.addTopping("Pepperoni")

console.log(ccPizaa2)

class ccPizza3 {
  public toppings: string[] = []
  /**
   *
   * @param name private effectively just adds private name: string
   */
  constructor(private name: string) {}
  public addTopping(topping: string) {
    this.toppings.push(topping)
  }
}

const ccPizaa3 = new ccPizza3("Pepperoni")

ccPizaa3.addTopping("Pepperoni")

// does not let me do cause private -> ccPizaa3.name -> Property 'name' is private and only accessible within class 'ccPizza3'.

// but, alas, this gives -> ​​​​​ccPizza3 { name: 'Pepperoni', toppings: [ 'Pepperoni' ] }​​​​​
console.log(ccPizaa3)

class ccPizza4 {
  public toppings: string[] = []
  /**
   *
   * @param name readonly effectively just adds public access to name: string. P.S. Readonly can only be initialized static or inside constructor.
   */
  constructor(readonly name: string) {}
  public addTopping(topping: string) {
    this.toppings.push(topping)
  }
}

const ccPizaa4 = new ccPizza4("Pepperoni")

// let me do cause readonly
ccPizaa4.name

// does not let me do cause readonly -> ccPizaa4.name = "readonly" -> Cannot assign to 'name' because it is a constant or a read-only property.

ccPizaa4.addTopping("Pepperoni")

console.log(ccPizaa4)
