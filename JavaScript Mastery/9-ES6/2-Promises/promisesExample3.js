//function returning a promise

function ricePromise(){
    return new Promise ((resolve,reject)=>{
        if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){ 
            resolve("Fried Rice");
        }else{
            reject("Could not make it")
        }
    })
    
}