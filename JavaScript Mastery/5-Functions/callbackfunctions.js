//callback functions

//callbacks with synchronous behaviour

function myFunc(callback){
    console.log("This is a function");
    callback();
}

function myFunc2(){
    console.log("This is also a function");
}
myFunc(myFunc2);









// //callbacks with async behaviour

// function getTwoNumbersandAdd(){

// }