const URL = "https://jsonplaceholder.typicode.com/posts"

//xhr object ko use kar k apni request configure karni hai
const xhr = new XMLHttpRequest();
// console.log(xhr);

//step1: xhr object pe open method use karna hai
xhr.open("GET",URL)
