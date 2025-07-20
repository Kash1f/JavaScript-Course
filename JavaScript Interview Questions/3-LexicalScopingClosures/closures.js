
//Example 1:

function makeFunc() {
  const name = "Your Name";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();



/*


In this closure example, returning the `displayName` function from `makeFunc`, the lexical scope — specifically the variable `name` — can still be accessed whenever the returned function is called. This is a fundamental concept in JavaScript known as a closure. A closure occurs when an inner function remembers variables from its outer function’s scope even after the outer function has finished executing. In this case, `makeFunc` defines a local variable `name` and a nested function `displayName` that logs `name`. By returning `displayName`, and assigning it to `myFunc`, the inner function retains access to `name`, even though `makeFunc` has already completed. This behavior demonstrates how closures preserve the environment in which a function was created, allowing it to use variables from that scope at any point in the future.


In short, the whole lexical scope of the inner function displayName is returned along with the function itself. It’s not just the Global Execution Context (GEC) that’s accessible — the environment inside `makeFunc` is also kept alive. So, when `displayName` is returned, it carries the `makeFunc` function’s scope with it, allowing `displayName` to access the variables declared inside `makeFunc`. This means the closure shares the necessary memory from `makeFunc`, not just the global memory.

*/
