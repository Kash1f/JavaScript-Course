//var
//let
//const

//var let and const are used to declare variables, const is used to make constants.

//var was used in old js
//var is function scoped, means it can be used anywhere within the function
//var adds itself to the window object

//let and const are from es6 Javascript
//let and const are braces scoped
//let and const do not add themselves to the window object

//The only difference between let and const is that the value of let can be changed but the value of constant cannot be changed

var a = 10;
console.log(a)

let b = 20;
b = 30;
console.log(b);

const c = 40;
// c = 29; //wrong
console.log(c);