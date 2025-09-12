// hello world -> Hello world

const capitalize = (str) => {
  return str
    .toLowerCase() //hello world
    .split(" ") //["hello", "world"]
    .map((word) => word[0].toUpperCase() + word.slice(1)) //["Hello", "World"]
    .join(" "); //Hello World
};

console.log(capitalize("hello world"));

//1. Make the string lowercase (toLowerCase method)
//2. Convert string to array (split method)
//3. Capitalize first letter of first word (map method)
//4. Convert array back to string (join method)


// words -> array of strings, e.g., ["hello", "world"]
// word  -> single string, the current element of the array while iterating
