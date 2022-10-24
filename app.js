import Dog from "./Dog.js"
import Cat from "./Cat.js"
import { hello, welcome } from "./Functions.js"
import book from "./Objects.js"

const { title, pages } = book

// PRINT
const dog = new Dog("Cooper", 3, true)
const cat = new Cat("Tigger", 5, false)
dog.printDogInfo()
cat.printCatInfo()

hello()
welcome("Alex")
console.log(book.title)

