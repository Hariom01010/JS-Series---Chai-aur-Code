// ES6 

class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}


const userOne = new User("hariom", "hari@example.com", 123)

// console.log(userOne.encryptPassword())
// console.log(userOne.changeUserName())


// Behind the Scenes 
function User1(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User1.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User1.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const userTwo = new User1("hariom", "hari@example.com", 123)
console.log(userTwo.encryptPassword())