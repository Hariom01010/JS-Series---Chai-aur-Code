class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){  //static stops the acces of the specified method/property by the instance of the object
        return `123`
    }
}

const hariom = new User("hariom")
// console.log(hariom.createId())   // WILL NOT WORK

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const userTwo = new Teacher("sam", "sam@example.com")
userTwo.logMe()
// console.log(userTwo.createId()) // THIS WILL NOT WORK