// for of 

// ['','','']
// [{},{},{}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num)
}

const greeting = "Hello World"
for (const val of greeting) {
    // console.log(`"Each char of greeting is ${val}`)
    
}

// Maps 

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FR", "France")
map.set("IN", "India")

// console.log(map)

for (const [key,value] of map) {
    // console.log(key + ":-" + value)
}

// Objects are not iterable with for of loop
const myObj = {
    "game1": "nfs",
    "game2": "gta"
}

// for(const game of myObj){
//     // console.log(game) 
// }


// for in loop 
for (const key in myObj) {
//    console.log(myObj[key])
}

const programming = ['rb', 'js', 'cpp', 'py']

for (const key in programming) {
//    console.log(programming[key])
}

const map2 = new Map()
map2.set("GTA","Grand Theft Auto")
map2.set("NFS","Need for Speed")
map2.set("POP","Prince of Persia")

for (const key in map2) {
    // console.log(key)
}

// for each loop 
function printMe(item){
    console.log(item)
}


// programming.forEach(printMe)

programming.forEach(element => {
    // console.log(element)
});

programming.forEach( (item,index, arr) => {
    // console.log(item,index,arr)
})

const myCoding = [
    {
        langName:"Javascript",
        langFileName: "js"
    },
    {
        langName:"Python",
        langFileName: "py"
    },
    {
        langName:"C++",
        langFileName: "cpp"
    },
]

myCoding.forEach( (item) =>{
    console.log(item.langName)
})