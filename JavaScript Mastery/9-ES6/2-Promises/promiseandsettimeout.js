//Promise and setTimeout

//Resolve/Reject Promise after 2 seconds

function myPromise() {
  return new Promise((resolve, reject) => {
    const value = true;
    setTimeout(() => {
      if (value) {
        resolve("Promise Resolved");
      } else {
        reject("Promise Rejected");
      }
    }, 2000);
  });
}

//calling the function
myPromise()
  .then((myValue) => {
    console.log(myValue);
  })
  .catch((error) => {
    console.log(error);
  });
