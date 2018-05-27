class gOPizza {
  constructor(private name: string, private price: number) {}

  get theName() {
    return this.name
  }
}

// works with any object, but untyped

class gOList {
  private list: any[] = [] // MUST be initialized; else Cannot read property 'push' of undefined​​

  addItem(item: any): void {
    this.list.push(item)
  }

  getList(): any[] {
    return this.list
  }
}

const gOLiist = new gOList()

gOLiist.addItem(new gOPizza("Pepperoni", 15))

const gOPizzas = gOLiist.getList()

// works with typed object, uses generics

class gOGenericList<T> {
  private list: Array<T> = [] // MUST be initialized; else Cannot read property 'push' of undefined​​

  addItem(item: T): void {
    this.list.push(item)
  }

  getList(): T[] {
    return this.list
  }
}

const gOGenericLiist = new gOGenericList<gOPizza>()

gOGenericLiist.addItem(new gOPizza("Pepperoni", 15))

const gOGenericPizzas = gOGenericLiist.getList()

console.log(gOGenericPizzas[0].theName)
