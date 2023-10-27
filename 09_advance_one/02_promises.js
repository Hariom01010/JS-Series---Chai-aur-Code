const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network calls
    setTimeout(()=>{
        // console.log("Async task is complete")
        resolve()
    }, 1000)
})

promiseOne.then(()=>{
    // console.log("Promise Consumed")
})




// Alternative Syntax
new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // console.log("Async Task 2 Complete")
        resolve()
    }, 1000)
}).then(()=>{
    // console.log("Promise 2 Consumed")
})




const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    resolve({username:"hariom", email:"rishi@example.com"})

    }, 1000)
})

promiseThree.then((user)=>{
    // console.log(user)
})



const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({username:"hariom", password:"123"})
        }else{
            reject("ERROR: Something went wrong")
        }
    }, 1000)
})

promiseFour
.then((user)=>{
    // console.log(user)
    return user.username
})
.then((username)=>{
    // console.log(username)
})
.catch((err)=>{
    // console.log(err)
})
.finally(()=>{
    // console.log("The promise is either resolved or rejected")
})



// Async Await Syntax 
const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username:"Javascript", password:"123"})
        }else{
            reject("ERROR: JS went wrong")
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        // console.log(response)
    } catch (error) {
        // console.log(error)
    }
}

consumePromiseFive()



// FETCH with Async/Await 
async function getAllUser(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json() // This also takes time
        // console.log(data)
    }catch(error){
        console.log("ERror:", error)
    }
}

// getAllUser()



// FETCH with .then .catch statement 
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})