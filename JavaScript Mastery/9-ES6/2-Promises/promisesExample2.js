//Promise examples

const bucket = ['coffee', 'chips', 'vegetables', 'rice'];

const friedPromise= new Promise ((resolve,reject)=>{
    if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){ 
        resolve("Fried Rice");
    }else{
        reject("Could not make it")
    }
})

friedPromise.then((myFriedrice)=>{
    console.log("Lets eat", myFriedrice);
})
.catch((error)=>{
    console.log(error);
})


