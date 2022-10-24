import Animal from "./Animal.js"
//DOG CLASS
export default class Dog extends Animal {
  constructor(name, age, isPoliceDog) {
    super(name, age)
    this.isPoliceDog = isPoliceDog
  }
  printDogInfo() {
    console.log(`Dog Name: ${this.name} Age: ${this.age} Police Dog: ${this.isPoliceDog}`)
  }
}