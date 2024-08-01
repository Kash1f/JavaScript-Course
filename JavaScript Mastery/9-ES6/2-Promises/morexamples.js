
//Method:1
let complete = true;

let promise1 = new Promise((resolve, reject) => {
    if(complete){
        resolve("Success");
    }else{
        reject("Failed");
    }
})

promise1.then((message)=>{
    console.log(message);
}).catch((message)=>{
    console.log(message);
})

//Method:2
let promise = true;

let promise2 = new Promise((resolve, reject) => {
    if(promise){
        resolve();
    }else{
        reject();
    }
})

promise2.then(()=>{
    console.log("Success");
}).catch(()=>{
    console.log("Failed");
})