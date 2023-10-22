const user = {
    name: "hariom",
    price: 120,
    welcomeMssg: function(){
        console.log(`${this.name} , Welcome to website`)
        console.log(this)
    }

}

// user.welcomeMssg()
// user.name = 'sam'
// user.welcomeMssg()


// console.log(this)

// function chai(){
//     let username = "hariom"
//     console.log(this.username)
// }

// chai()

// const chai =  function(){
//     let username = "hariom"
//     console.log(this.username)
// }



// Arrow Function 

// const chai = ()=>{
//     let username = "hariom"
//     console.log(this)
// }

// chai()


// const addTwo = (num1, num2)=>{
//     return num1 + num2
// }

// const addTwo = (num1, num2)=> num1 + num2

// const addTwo = (num1, num2)=> (num1 + num2)

const addTwo = (num1, num2)=> ({username: "hariom"})

console.log(addTwo(1,2))


// const myArr = [1,2,3,4]

// myArr.forEach(()=>{})