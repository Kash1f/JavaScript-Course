//Promise examples

//A Promise is an Object that has two values, its status and its value

console.log("script start");

const bucket = ['coffee', 'chips', 'vegetables','rice'];

//here new keyword constructs our promise
//pass executor functions to promise i.e resolve and reject, these are bascially parameters who itself are functions 

const friedPromise= new Promise ((resolve,reject)=>{
    if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){ 
        //here we can pass any value, object, array or string
        resolve({value: "Fried Rice"});
    }else{
        reject("Couldn't make it")
    }
})

//Promise has been produced/created above

//Now we have to consume this promise
//How to consume? As a JS developer we will produce less promises and consume more

//then me we can write something that will receive the value of resolve method 
friedPromise.then(
    (myFriedrice)=>{
    console.log("Lets eat", myFriedrice);
})
//reject value will come here
.catch(
    (error)=>{
    console.log(error);
})


setTimeout(()=>{
    console.log("Hello from setTimeout");
},0)

for (let i = 0; i<=100; i++){
    console.log(Math.random(), i);
}


console.log("script end");


//Key Notes:

//The new keyword constructs our promise
//pass executor functions to promise i.e resolve and reject, these are bascially parameters who itself are functions
//then me we can write something that will receive the value of resolve method
//Promise is added in microtask queue