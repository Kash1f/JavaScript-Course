//arrow function

let sum4 = () => {
    let a = 10;
    let b = 20;
    return a+b;
}

console.log(sum4());

//another example of arrow => function for one parameter/input

let sum5 = (a,b) => a + b 


console.log(sum5(15,20));

//arrow function using return

let sumThreeNumbers = (num1, num2, num3) => {
    return num1 + num2 + num3;
}

let ans = sumThreeNumbers(2,3,4);
console.log(ans);

const myFunc1 = (number1, number2) => {
    return number1 + number2;
}
    const reTurn = myFunc1(100,4)
    console.log(reTurn) ;


const myfunc2 = () => {console.log("I love Australia")}
myfunc2();

const myfunc3= () => {console.log("I love Australia")}
myfunc3();
