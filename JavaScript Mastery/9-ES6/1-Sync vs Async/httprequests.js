

//1. Make a request object, this is an older data format before JSON arrived, this request object has the capability to work with any kind of data like XML, JSON, Plain Text etc. Now this request object will be used to send a request from the browser, XMLHttpRequest(); is built into the JavaScript Language. Now we can use this request object to send a request get some data 

const request = new XMLHttpRequest();

//2. First of all we will take the request variable we just created and now we can access a lot of methods and properties we can use. The first method we need to use is the open() method. Now, this open() method takes two arguments, the first argument is a string and its the type of request we want to make. When we want to get some data, we use the GET request. There are other types of requests that we can make like POST to send data or PUT to UPDATE data. The second argument is where we want to make the request to, what is the endpoint we want to get data from. This endpoint from JSON placeholder is the data that we want, pass it as the second argument to request.open(). Now, we telling our request what type of request is and where to get that data from, where to send the request to.

//3. This line of code "i.e request.open(...)" is not making a request right now, we are just setting up rightnow, to actually send the request, we should use request.send() and this sends the request 

request.addEventListener('readystatechange', ()=>{
    console.log(request, request.readyState);
})

//4. In our code we don't know when this is complete, we don't know how to access that data, so how do we do all that? Well, in our code we can track the progress of a request using an event listener and a specific event called 'readystate' change. So, we attach this to the req object itself. So this event fires every time there's a state change in the req. State change means that the request is going through these different phases of the request and there's four in total. We will console.log the request object every time there is a state change and then request.readyState and that gets us the state that the current request is in.

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();