    //1
    let a = 5;
    let b = 5;
    console.log(a+b);

    //2
    function sum1(){
    let a = 5;
    let b =10;
    console.log(a+b);
}            

sum1()


//3
function sum2(){
    let a = 10;
    let b =10;
    return a+b;
}            

console.log(sum2());


//storing function in a variable 
var sum3 = function(){
    var a = 15;
    var b =10;
    return a+b;
}

console.log(sum3());

var sum3 = function(){
    var a = 15;
    var b =10;
    return a+b;
}

console.log(sum3());

function twoPlusFour(){
    console.log(2+4);
    console.log(4+8);
}

twoPlusFour();

//understanding return keyword

//passing parameters here
function sumTwoNumbers(number1, number2){
    return number1 + number2;
}

const returnedValue = sumTwoNumbers(4,5);
console.log(returnedValue);


//here the value of the variables/parameters of the function will become 4 and 5 when called, then those values will be stored in number1 and number2 which are the respective variables/parameters of our function. Knowing the fact that return keyword returns the value where the function is called, so the value will be stored in variable of returnedValue as it is declared as a variable of our function and according to rule the returned value will also be stored in the variable which is set equal to our function and then the variable returnedValue can be printed.

//callback functions

let myfunc = (a) => {
    console.log(a);
    console.log("hello world")
    
}
myfunc([1,2,3]);


// let myFuncc = (number1) => {
//     console.log(number1)
// }

// // myFuncc(100000);


// function myFuncc2(){
//     console.log("inside my funcc2");
// }



// function myFuncc(a){
//     console.log(a);
// }

// myFuncc();

function myFunc2 (name){
    console.log("inside my func2");
    console.log(`Your name is ${name}`);

}

function myFunc(parameter){
    console.log("Main function");
    parameter("sameer");

}

myFunc(myFunc2);

//map method

const numbers = [3,4,6,1,8];

const square = function(number){
    return number * number;
}

const squareNumber = numbers.map(square);

