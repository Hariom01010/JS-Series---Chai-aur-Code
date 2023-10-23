// const coding = ['js', 'py', 'cpp', 'rb','java']

// const values = coding.forEach( (item)=>{
//     // console.log(item) 
//     return item  //returns undefined
// } )

// console.log(values)


// Filter 

const myNums = [1, 2, 3 ,4 ,5 ,6 ,7, 8, 9, 10]

const newNums = myNums.filter( (num)=>{
    return num>5
})

console.log(newNums)


const books = [
    {
        books:"book1",
        genre:"history",
        publish:1982,
        edition:2004
    },
    {
        books:"book2",
        genre:"science",
        publish:1986,
        edition:2010
    },
    {
        books:"book3",
        genre:"science",
        publish:1985,
        edition:2008
    },
    {
        books:"book4",
        genre:"non-fiction",
        publish:1982,
        edition:2004
    },
    {
        books:"book5",
        genre:"history",
        publish:1995,
        edition:2014
    },
    
]

let userBooks = books.filter((bk)=> bk.genre == "history")

userBooks = books.filter( (bk)=> {
    return bk.publish> 1982
})

userBooks = books.filter( (bk)=> {
    return bk.publish> 1982 && bk.genre == "history"
})

console.log(userBooks)