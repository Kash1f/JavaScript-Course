
//some method
let nums = [1,2,1,3,4,5,6];

let isGreatherThan = nums.some((n) => n>3)
    
console.log(isGreatherThan);

//find method
//returns only the first element that satisfies the condition
const numbers = [1, 2, 3, 4, 5];

const found = numbers.find(num => num > 3);

console.log(found);

//Here, 5 did not get printed as the program stopped once the first value was found that satisfies the condition

//filter method

const numbers2 = [1, 2, 3, 4, 5, 6];

// Use filter to get all even numbers
const evenNumbers = numbers2.filter(num => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6]


//reduce method

const a = [5,1,3,2,6];

const output = a.reduce(function(acc, curr){
    acc = acc + curr
    return acc;
},0)

console.log(output);
