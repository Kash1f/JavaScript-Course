
//fetch using normal promises
// function abcd(){
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(raw =>{
//         return raw.json();
//     }).then(data=>{
//         console.log(data);
        
//     })
// }

// abcd();

//Now same thing with async function using await
//remeber: async function returns a promise

async function abcd(){
    let raw = await fetch("https://jsonplaceholder.typicode.com/posts")
    let ans = await raw.json()
    console.log(ans);
    
}

abcd();


//jab bhi koi code async hai to apko us k liye wait karna parta hai because we dont know k uska answer kab aaiga 