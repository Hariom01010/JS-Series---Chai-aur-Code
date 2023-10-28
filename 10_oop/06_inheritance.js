class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const userOne = new Teacher('hariom','hari@example.com',123)
const userTwo = new User("sam")
// userOne.addCourse()
// userOne.logMe()

// userTwo.logMe()

console.log(userOne instanceof Teacher)
console.log(userOne instanceof User)

