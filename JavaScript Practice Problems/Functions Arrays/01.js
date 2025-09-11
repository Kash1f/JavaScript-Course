
//1. Create a Function that returns the last element of an array

function getLastElement(arr){
    return arr[arr.length - 1]; //function can access passed parameter 'arr' anywhere in its body
}

let arr = [1,2,3,4,5];
let result = getLastElement(arr);
console.log(result);

//2. Find the combination of two arrays

let arr1 = [1,2,3];
let arr2 = [4,5,6];

// let combinedArray = arr1.concat(arr2); //combines two arrays
let combinedArray = [...arr1, ...arr2]; //using spread operator to combine two arrays

console.log(combinedArray);

let combinedArray2 = arr1 + arr2; //this will not combine arrays, it will convert them to strings and concatenate them

//3. Generate a random integer between 0-18

let randomNum = Math.floor(Math.random() * 19);
console.log(randomNum); 
//Math.random() generates a float between 0 and 1, multiplying by 19 gives a range of 0 to 18.999..., Math.floor() rounds down to nearest integer

