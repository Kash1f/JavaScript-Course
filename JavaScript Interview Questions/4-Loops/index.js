
//1. Write a for loop to print the numbers from 1 to 50.

for (let i = 1; i< 51; i++) {
    console.log(i);
}

//2. Use a while loop to sum the numbers from 1 to 10.

let a = 1;
let sum = 0;

while (a < 11){
    sum = sum + a;
    a++;
    console.log(a);
}

console.log(sum);


//3. Create a for...of loop to log each character of the string "JavaScript".


for (let j of "JavaScript") {  //here j holds the value of each character in the string "JavaScript"
    console.log(j);
}