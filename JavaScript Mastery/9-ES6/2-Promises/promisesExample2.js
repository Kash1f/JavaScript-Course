//Promise examples
console.log("script start");

const bucket = ['coffee', 'chips', 'vegetables', 'salt','rice'];

//here new keyword constructs our promise
//pass executor functions to promise i.e resolve and reject, these are bascially parameters who itself are functions 
const friedPromise= new Promise ((resolve,reject)=>{
    if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){ 
        //here we can pass any value, object, array or string
        resolve("Fried Rice");
    }else{
        reject("Could not make it")
    }
})

//Promise has been produced/created above

//Now we have to consume this promise
//How to consume? As a JS developer we will produce less promises and consume more
friedPromise.then((myFriedrice)=>{
    console.log("Lets eat", myFriedrice
    
    );
})
.catch((error)=>{
    console.log(error);
})

//----------------------------------------------------------------------------------------------------------------------//

setTimeout(()=>{
    console.log("Hello from setTimeout");
},0)

for (let i = 0; i<=100; i++){
    console.log(Math.random(), i);
}


console.log("script end");