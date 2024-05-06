
//forEach() method

let abc = [45,55,65,99]

abc.forEach(n => {
    console.log(n);
});

//map fucntion

const numbers = [3,4,6,1,8]  //array

const square = function(number){   
     //callback function to square the number, 3 and other numbers will pe passed one by one in this function which will be squared here
    return number * number
}

const squareNumbers = numbers.map(square);   
console.log(squareNumbers);

  //map function that will give new array as an output. square variable will be passed in map function since it squares the number and the map function will give the required output when the variable in which map is stored will be printed 


//rest and spread operator

//spread operator->

//spread means element ki sari values ko specific jagah pe bikher dena



var a = [1,2,3,4,5,6,7,8,88,99,100];

var b = [...a]

console.log(b);

//spread use hota hai copy karne k liye ya phir us location pe kisi aur ki values bikherne k liye

//rest use hota hai jab aapko bache huai values aik variable me daalne hon

//rest operator->

function abcd(a,b,c,...d){
    console.log(a,b,c, d); //sari bachi hui values d me ajaingi
}

abcd(1,2,3,4,5,6,7,8)

//rest operator values ko aik jagah pe rakhta hai jab k spread operator values ko spread kardeta hai


//REDUCE METHOD
//It reduces the elements of an arrya to a single value

//In this example we will create an array of prices as if it was a shopping cart we will sum all of the prices within our cart and return the a total, we'll need an array to work with

const prices = [5, 30, 40, 15, 25, 45];

const total = prices.reduce(); 
//we do need to pass in a callback to a function, we need to create a function that will sum all of these values





