// let myName = "hariom    ";
// let myLastName = "Vashista    "

// console.log(myName.trueLength)


let myHero = ['thor', 'spiderman']

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hariom = function(){
    console.log("Hariom is present in all objects")
}

Array.prototype.heyhariom = function(){
    console.log(`Hariom says hello`)
}

// heroPower.hariom()
// myHero.heyhariom()
// heroPower.heyhariom()



// Inheritance 

const user = {
    name:"hari",
    email: "hari@example.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__:TeachingSupport
}
Teacher.__proto__ = user  // Prototypal Inheritance

// Modern Syntax 
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUserName = "sam123         "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True Length is: ${this.trim().length}`)
}

anotherUserName.trueLength()
"tea".trueLength()
"hariom".trueLength()