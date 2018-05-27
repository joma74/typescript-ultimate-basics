// These are overloads 1 and 2 ..
function reverse(sth: string): string
function reverse<T>(sth: T[]): T[]
// .. of..
function reverse<T>(sth: string | T[]): string | T[] {
  if (typeof sth === "string") {
    return sth
      .split("")
      .reverse()
      .join("")
  }
  return sth.slice().reverse()
}

console.log(reverse("Pepperoni"))

console.log(reverse(["bacon", "pepperoni", "chili", "mushrooms"]))
