// singleton
// Object.create()

// object literals

const mySym = Symbol("key1")

const user = {
    name: "Hariom",
    "full name": "hariom vashista",
    age: 19,
    location: "Delhi",
    email: "hariom@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    [mySym]: "myKey1"
}

// console.log(user.name)
// console.log(user["name"])

// console.log(user["full name"])
// console.log(typeof user[mySym])

user.email = "rishi@gmail.com"
// Object.freeze(user)
user.email = "rishi3@gmail.com"
// console.log(user)

user.greeting = function(){
    console.log("Hello User")
    return 1
}

user.greetingTwo = function(){
    console.log(`Hello, User ${this.name}`)
}

console.log(user.greeting())
console.log(user.greetingTwo())