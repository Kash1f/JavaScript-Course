//Promise examples
console.log("script start");
const bucket = ['coffee', 'chips', 'vegetables', 'salt','rice'];

const friedPromise= new Promise ((resolve,reject)=>{
    if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){ 
        resolve("Fried Rice");
    }else{
        reject("Could not make it")
    }
})

//produce

//consume
//how to consume
friedPromise.then((myFriedrice)=>{
    console.log("Lets eat", myFriedrice);
})
.catch((error)=>{
    console.log(error);
})

for (let i = 0; i<=100; i++){
    console.log(Math.random(), i);
}


console.log("script end");