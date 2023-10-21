// Primitive Datatypes 

// 7 types: String, Number, Bigint, Symbol, Null, Undefined, Boolean
// They are call by value meaning you are provided a copy rather than the original reference and changes are made to the copy.

const score = 100
const scorevalue = 100.3

const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherID = Symbol("123")

// console.log(id) 
// console.log(anotherID) 
// console.log(anotherID == id) 

// const bigNumber = 1344444444444444n (bigInt) 

// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime
//  and can change throughout the program as we assign different values to them

// Reference / Non Primitive Datatype

// Array, Objects, Functions
// They are call by reference  

const heros = ["shaktiman", "nagaraaj", "doga"]

const myObj = {
    name:"Hariom",
    age:12
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof heros)
console.log(typeof myObj)
console.log(typeof myFunction) // returns function function object to be precise