// function outer() {
//   let name = "Ali"; //outer variable

//   function inner() {
//     console.log(name); //can access 'name'
//   }
//   inner(); //calling inner from within outer
// }

// outer();

function outer() {
  let name = "Ali"; //outer variable

  function innerOne() {
    function innerMost() {
      console.log("innerMost", name); //can access 'name'
    }
    console.log("innerOne", name); //can access 'name'
    innerMost(); //calling innerMost from within innerOne
  }
  function innerTwo() {
    console.log("innerTwo", name); //can also access 'name'
  }

  innerOne(); //calling inner from within outer
  innerTwo(); //calling innerTwo from within outer
}

outer();


/*

Explanation of Lexical Scoping:

1. Lexical Scoping & Function Definitions

Lexical scoping means that a function’s accessible variables are determined by where it is defined in the code, not where it is called. This differs from dynamic scoping (which JavaScript does not use). You correctly pointed out that functions **carry their lexical scope** with them, which is **independent of the Global Execution Context** when the code runs.

2. Closures and Memory of Outer Scope

Closures are possible because of lexical scoping. A closure is formed when an inner function "remembers" and continues to access variables from its outer (lexical) environment, even after that outer function has finished executing.

3. Lexical Scope vs Local Scope

You also asked whether lexical scope is the same as local scope. They are related but not the same — lexical scope is the rule that determines how scope visibility works based on function definitions, while local scope is just **one level** of that rule: the variables directly declared inside a function.



*/