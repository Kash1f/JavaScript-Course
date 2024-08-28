//synchronous vs asynchronous programming

//synchronous programming:

/*
console.log("script started");

for(let i = 1; i<10; i++){
    console.log("inside loop");
}


console.log("script ended");

//this is synchronous programming as the code executes line by line

*/

//setTimeout

//as an input aik function lega aur doosra argument lega k kitni dair baad ye function call karna hai

/*
console.log("code started");

function hello(){
    console.log("Hello world");
}

setTimeout(hello, 5000) //1000ms
//mai chahta hun k hello function ko mai at least 1 second baad call karun

console.log("code ended");

*/

console.log("script start");

setTimeout(()=> {
    console.log("inside setTimeout");
},5000);

console.log("script ended");