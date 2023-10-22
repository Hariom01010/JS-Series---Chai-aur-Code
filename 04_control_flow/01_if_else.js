// if 
const isUSerLoggedIn = true
const temperature = 41

if (temperature < 50) {
    // console.log("Less than 50")
}else{
    // console.log("Temperature is greater than 50")
}

// console.log("executed")

// Conditional Operator: <, >, <=, >=, ==, !=, ===

const score = 200

if(score > 100){
    const power = "fly"
    // console.log(`User Power: ${power}`)
}

// console.log(`User Power: ${power}`)

const balance = 1000

if(balance < 500){
    // console.log("Less than 500")
}else if(balance <750){
    // console.log("Less than 750")
}else if(balance < 900){
    // console.log("Less than 900")
}else{
    // console.log("Less than 1200")
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course")
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("USer logged in")
}