/*
console.log(1);
console.log(2);

//This is not gonna block the code below
setTimeout(()=>{
    console.log('callback function executed');
}, 2000)

console.log(3);
console.log(4);
*/

const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    console.log(request, request.readyState);
})
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();
