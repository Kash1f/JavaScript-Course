//Promises are like real promises that we make. In Javascript promises are used to run a part of code. If the code executes then the promise is fulfilled otherwise the promise is rejected.


//Promises Problem #1

// let ans = new Promise((res, rej) => {
//     if (true){
//         return res();
// } else {
//     return rej();
// }
// })

// ans
// .then(function(){
//     console.log("Promise resolved");
// })
// .catch(function(){
//     console.log("Promise rejected");
// })

// Promises Problem #2

const ans = new Promise((resolve, reject)=>  {
    const n = Math.floor(Math.random()*10);

    if (n < 5) {
        return resolve();
    }
    else {
        return reject();
    }    
})

ans.then(function(){
    console.log("promise fulfilled, below 5");

})
.catch(function(){
    console.log("promise rejected, above 5");
})
