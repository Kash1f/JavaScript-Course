//synchronous vs asynchronous programming

//synchronous programming:

console.log("script started");

for(let i = 1; i<10; i++){
    console.log("inside loop");
}

console.log("script ended");

//this is synchronous programming as the code executes line by line

//setTimeout

//as an input aik function lega aur doosra argument lega k kitni dair baad ye function call karna hai

console.log("script start");

function hello(){
    console.log("Hello world");
}

setTimeout(hello, 1000)