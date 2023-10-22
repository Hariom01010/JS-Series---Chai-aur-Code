// const userEmail = "h@gmail.com"

// if(userEmail){
//     // console.log("Got user email")
// }else{
//     // console.log("don't have email")
// }

// falsy values: false, 0, "", -0, 0n (BigInt), null. undefined, NaN 
// truthy values: "0", "false", " ", [], {}, function(){}

const userEmail = []

if(userEmail.length == 0){
    // console.log("Array is empty")
}

const emptyObj = {}

if(Object.keys(emptyObj).length == 0){
    // console.log("Object is empty")
}


// Nullish Coalescing Operator (??): null undefined

let val1
// val1 = 5 ?? 10
// val1 = null ?? 10

// var1 = undefined ?? 14

val1 = null ?? 10 ?? 15

console.log(val1)

// Ternary Operator 
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("Greater than 80"): console.log("Less than 80")