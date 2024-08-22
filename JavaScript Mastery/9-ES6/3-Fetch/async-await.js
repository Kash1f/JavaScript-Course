//Async Await method

//GET request usinfg fetch

// fetch(URL)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });


const URL = "https://jsonplaceholder.typicode.com/posts";

//This function will always giva a promise when called
async function getPosts(){
    const response = await fetch(URL);
    const data = await response.json();
    return data;
    
    
}

getPosts()
         .then(myData => {
            console.log(myData);
         }).catch(error=>{
            console.log(error);
            
         })



//async function returns a promise, ab hum async function me fetch ko call kar sakte hain aur fetch ko call karengy to fetch promise return karega, fetch me we can pass the URL, fetch me hum .then laga sakte thay lekin yahan hum await use kar sakte hain, await kya karega? await wait karega jab tak fetch(URL) ye resolve nahi hojata. async await wala kaam browser bg me kar raha hai, await promise(await fetch(URL) k resolve ya reject hone ka wait karega
