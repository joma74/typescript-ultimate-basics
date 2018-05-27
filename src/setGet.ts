class sgSizes {
  constructor(public sizes: string[]) {}

  // property setter
  set availableSizes(sizes: string[]) {
    this.sizes = sizes
  }
  // property getter
  get availableSizes() {
    return this.sizes
  }
}

const sizes = new sgSizes(["small", "medium"])
console.log(sizes.availableSizes)

console.log((sizes.availableSizes = ["small", "medium", "large"]))
