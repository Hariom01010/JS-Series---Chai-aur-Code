// var c = 300

let a = 300

if(true){
    let a = 10
    const b = 20
    // var c = 30
    // console.log("INNER: ", a)
}

// console.log(a)
// console.log(b)
// console.log(a)

function one(){
    const userName = "Hariom"

    function two(){
        const website = "yotube"
        console.log(userName)
    }
    // console.log(website)
    two()
}
// one()

if(true){
    const userName = "hariom"

    if(userName == "hariom"){
        const website = "youtube "
        // console.log(website + userName)
    }
    // console.log(website)
}

// console.log(userName)


// *********************** interesting *******************************

console.log(addOne(5))

function addOne(num){
    return num + 1
}



console.log(addTwo(5))

const addTwo = function(num){
    return num + 2
}
