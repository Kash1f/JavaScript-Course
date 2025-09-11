
//4. Create a function that returns the new array containing only the string values

let arr = [1, 2, 3, 4, "hello", 4, "world", "javascript"];

let result = arr.filter((element) => {
//   if (typeof element === "string") {
//     return true;
//   } else {
//     return false;
//   }
    return typeof element === "string";
});

console.log(result);

//5. Find the maximum/largest number in an array

let a = [40, 100, 1, 5, 25, 10];
console.log(Math.max(...a));