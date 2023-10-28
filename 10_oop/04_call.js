function SetUserName(username){
    //complex DB calls
    this.username = username
    console.log("called")
}

// After SetUserName work's done, it's execution context is removed from call stack and the variables are removed
// so we use .call() method while calling it in the function to give the SetUserName execution context to it. You can give a optional this argument to give
// reference to the function's this 

function createUser(username, email, password){
    SetUserName.call(this, username)

    this.email = email
    this.password = password
}


const user = new createUser("Hariom", "hari@example.com", 123)

console.log(user)