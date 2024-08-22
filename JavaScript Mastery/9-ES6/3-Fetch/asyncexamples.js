


const URL = "https://jsonplaceholder.typicode.com/posts"

const getPosts = async () => {

    const response = await fetch(URL);
    const data = await response.json();
    return data;
}

console.log(1);
console.log(2);

getPosts().then(data=>{
    console.log("Resolved", data);
})

console.log(3);
console.log(4);


