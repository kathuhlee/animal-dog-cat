import Animal from "./Animal.js"
// CAT CLASS 
export default class Cat extends Animal {
  constructor(name, age, eatRat) {
    super(name, age)
    this.eatRat = eatRat
  }
  printCatInfo() {
    console.log(`Cat Name: ${this.name} Age: ${this.age} Eat Rat: ${this.eatRat}`)
  }
}