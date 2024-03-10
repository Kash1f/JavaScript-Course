//AJAX = Asynchronous JavasScript and XML

/*
It is a set of web development techniques using many web technologies on the 
"client side" to create asynchronous web applications.

With AJAX web apps can send and retreive data from a server asynchronously 
(in the background) without interfering with the display and behaviour of the 
existing page

We don't use data in XML format anymore, we use JSON now.

We have 3 most common ways to create and send request to server

1. XML HTTPRequest (Old way of doing)
2. Fetch API (New way of doing)
3. Axios (Third party library)
*/

//yahan pe humay is xhr object ko use kar k humay server pe http request karni hai, ya to hum server bana sakte hain ya bane banai APIs ko hum use kar sakte hain

//browser by default GET request karta hai, humay response me JSON data milega


//yahan pe, is link pe request karni hai
const URL = "https://jsonplaceholder.typicode.com/posts"

//xhr object ko use kar k apni request configure karni hai
const xhr = new XMLHttpRequest();
// console.log(xhr);

//step1: xhr object pe open method use karna hai
xhr.open("GET")

//browser is function ko tab call karega jab uski ready state change hogi
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState === 4){
        const response = xhr.response;
        JSON.parse(response)        //JSON to JavaScript Object
    }
}

xhr.send()




