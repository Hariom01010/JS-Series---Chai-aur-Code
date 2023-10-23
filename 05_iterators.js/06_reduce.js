const myNums = [1, 2, 3]

const myTotal = myNums.reduce( (acc, curVal)=>{
    // console.log(`accumulator: ${acc} and current value: ${curVal}`)
    return acc+curVal
},0 )

// console.log(myTotal)

const shoppingCart = [
    {
        itemName:"JS Course",
        price: 2999
    },
    {
        itemName:"Python Course",
        price: 1999
    },
    {
        itemName:"DSA Course",
        price: 3999
    },
]

const totalVal = shoppingCart.reduce( (totalVal,item)=>{
    return totalVal + item.price
}, 0)

console.log(totalVal)