// for

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     if(element == 5){
//         // console.log("5 is best number")
//     }
//     // console.log(element)    

// }


// Nested Loop

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`)
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`)
//     }
// }



let myArr = ['flash','superman','ironman']

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element)
    
}



// break and continue 

for (let index = 0; index < 20; index++) {
    if(index == 5){
        // console.log(`Detected 5`)
        break
    }
    // console.log(`Value of i is ${index}`)
}


for (let index = 0; index < 20; index++) {
    if(index == 5){
        console.log(`Detected 5`)
        continue
    }
    console.log(`Value of i is ${index}`)
}







