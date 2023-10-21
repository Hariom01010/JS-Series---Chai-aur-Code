// Arrays 

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraaj"]

const newArr = new Array(1,2,3,4)

// console.log(myArr[1])

//****************** Array Methods ************************


// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))

// const newArr2 = myArr.join()

// console.log(newArr2)
// console.log(myArr)


// slice, splice 

console.log("A", myArr)

const myArr2 = myArr.slice(0,3)

console.log(myArr2)
console.log("B", myArr)

const myArr3 = myArr.splice(0,3)
console.log(myArr3)
console.log("C", myArr)