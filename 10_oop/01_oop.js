const user = {
    userName: "hariom",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database")
        // console.log(`Username: ${this.userName}`)
        console.log(this)
    }
}

function User(userName, loginCount, isLoggedIn){
    this.userName = userName
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    
    this.greeting = function(){
        console.log(`Welcome ${this.userName}`)
    }

    // return this
}

const userOne = new User("hariom", 12 ,true)
const userTwo = new User("vashista", 11, false)

// console.log(user.userName)
console.log(userOne.constructor)
console.log(userTwo)