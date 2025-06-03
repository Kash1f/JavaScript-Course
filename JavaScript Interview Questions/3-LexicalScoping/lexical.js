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
