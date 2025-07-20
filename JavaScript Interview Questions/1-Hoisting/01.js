
//1

// x = 30;

// console.log(`The value of x1 is: ${x}`);

// var x = 10;

// console.log(`The value of x2 is: ${x}`);

// console.log("Value of age is: ", age);


//2. Temporal deadzone

//Trying to access a variable (let and const) before it is declared and intialized is called TDZ

x = 30;

console.log(`The value of x1 is: ${x}`);

let x = 10;

console.log(`The value of x2 is: ${x}`);

//TDZ in Block Scope

{
  console.log(a); // ❌ ReferenceError: a is in TDZ
  let a = 5;       // TDZ ends here
  console.log(a); // ✅ 5
}

//TDZ in Function Scope

function test() {
  console.log(b); // ❌ ReferenceError: b is in TDZ
  const b = 10;   // TDZ ends here
  console.log(b); // ✅ 10
}
test();



