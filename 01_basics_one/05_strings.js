const name = "hariom"
const repoCount = 50


// Conctenation
// console.log(name + repoCount + "value")


// String Interpolation
// console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("Hariom-vashista-12")

// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
console.log(gameName.charAt(0))
console.log(gameName.indexOf("r"))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-6,4)
console.log(anotherString)

const newStringOne = "   hariom    "
console.log(newStringOne.trim())

const url = "https://hariom.com/hariom%20vashista"
console.log(url.replace("%20","-"))
console.log(url.includes('hariom'))

console.log(gameName.split("-"))