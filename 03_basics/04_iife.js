// Immediately Invoked Function Expressions 

// To prevent pollution from global scope we use IIFE 

// Named IIFE
(function chai(){
    console.log("DB CONNECTED")
})();


// Unnamed IIFE 
( (name)=>{
    console.log(`DB CONNECTED ${name}`)
})("hariom")

