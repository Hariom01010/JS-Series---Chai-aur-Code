// const tinderUser = new Object() => Singleton Object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email:"sam@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Hariom",
            lastName: "Vashista"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = {obj1,obj2}

const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3)

const obj4 = {...obj1,...obj2}
// console.log(obj4)

const users = [
    {
        id:"123",
        name:"hari"
    },
    {
        id:"234",
        name:"om"
    }
]

// console.log(users[1].id)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("name"))



const course = {
    courseName: "JS Hindi",
    price: "999",
    courseInstructor:"Hariom"
}

// course.courseInstructor

const {courseInstructor:instructor} = course
// console.log(courseInstructor) 
console.log(instructor)

// const navabr = ({company})=>{

// }

// navabr(company = "hitesh")

// {
//     "name":"hariom",
//     "courseName": "js in hindi",
//     "price":"free"
// }

[
    {},
    {},
    {}
]