//function returning a promise

function ricePromise() {
  const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];
  return new Promise((resolve, reject) => {
    if (
      bucket.includes("vegetables") &&
      bucket.includes("salt") &&
      bucket.includes("rice")
    ) {
      resolve("Fried Rice");
    } else {
      reject("Could not make it");
    }
  });
}

ricePromise()
  .then((myFriedrice) => {
    console.log("Lets eat", myFriedrice);
  })
  .catch(
    (error) => {
    console.log(error);
  });
