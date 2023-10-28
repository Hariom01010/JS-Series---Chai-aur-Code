const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

// Math.PI = 5
// console.log(Math.PI)

// console.log(descriptor)

const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("Chai nhi bani")
    }
}


// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

Object.defineProperty(chai,"name",{writable:false,enumerable:false})
// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

chai.name = "masala tea"
// console.log(chai.name) // WILL NOT CHANGE


for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== "function"){
        // console.log(`${key} : ${value}`)
    }
}
