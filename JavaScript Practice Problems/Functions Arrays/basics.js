
//Create a Function that returns the last element of an array

function getLastElement(arr){
    return arr[arr.length - 1]; //function can access passed parameter 'arr' anywhere in its body
}

let arr = [1,2,3,4,5];
let result = getLastElement(arr);
console.log(result);

//Find the combination of two arrays

let arr1 = [1,2,3];
let arr2 = [4,5,6];

let combinedArray = arr1.concat(arr2); //combines two arrays
console.log(combinedArray);

let arr3 = [1,2,3];
let arr4 = [4,5,6];

let combinedArray2 = [...arr3, ...arr4]; //Using spread operator to combine arrays
console.log(combinedArray2);