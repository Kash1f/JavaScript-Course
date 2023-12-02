
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

var a = [1,2,3,4,5,6,7,8,88,99,100];
var b = a;

console.log(b);