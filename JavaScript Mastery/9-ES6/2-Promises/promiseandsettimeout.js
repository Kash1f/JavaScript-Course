//Promise and setTimeout

//Resolve/Reject Promise after 2 seconds

function myPromise(){
    return new Promise((resolve,reject)=>{
        const value = true;
        setTimeout(()=>{
            if(value){
                resolve()
            } else{
                reject()
            }
        }, 2000)
    })
}