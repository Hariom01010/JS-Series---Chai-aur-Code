function sayMyName(){
    console.log("h")
    console.log("a")
    console.log("r")
    console.log("i")
}

// sayMyName()

// function addTwoNum(num1, num2){
//     console.log(num1 + num2)
// }

function addTwoNum(num1, num2){
    // let result = num1 + num2
    // return result

    return num1 + num2
}


const result = addTwoNum(2, 3)
// console.log(result)

function loginUserMessage(userName = "sam"){
    if(!userName){
        console.log("Please enter username")
        return 
    }
    return `${userName} just logged in.`
}

// console.log(loginUserMessage("hariom"))
// console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 55, 200))

const user = {
    userName: "hariom",
    prices: '1200'
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`)
}

// handleObject(user)
handleObject({
    userName:"same",
    price:"12"
})

const myNewArr = [1,2,3,41,23]

function returnSecondValue(getArr){
    return getArr[1]
}
// console.log(returnSecondValue(myNewArr))
console.log(returnSecondValue([1,2,3 ,455]))