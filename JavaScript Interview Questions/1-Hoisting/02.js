
// myFunc();

// var myFunc = function(){
//     console.log("First");
// }

// myFunc();

// function myFunc(){
//     console.log("Second");
// }

// myFunc();


console.log("Global Execution Context Starts");

var globalVariable = "This is a Global Variable";

function globalFunction(){
    console.log("Inside Global Function");
}

console.log(globalVariable);
globalFunction();

console.log("Global Execution Context Ends");
