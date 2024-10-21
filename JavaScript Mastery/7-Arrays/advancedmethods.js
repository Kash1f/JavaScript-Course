
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