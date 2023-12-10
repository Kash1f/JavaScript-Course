//Promises are like real promises that we make. In Javascript promises are used to run a part of code. If the code executes then the promise is fulfilled otherwise the promise is rejected.

//Promises Problem #1

const ans = new Promise((resolve, reject)=>  {
    const n = Math.floor(Math.random()*10);

    if (n < 5) {
        return resolve();
    }
    else {
        return reject();
    }    
})

