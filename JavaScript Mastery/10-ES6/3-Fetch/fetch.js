//Fetch

// const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL)
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("Something went wrong");
//     }
//   })
//   .then((jsondata) => {
//     console.log(jsondata);
//   })
//   .catch((error) => {
//     console.log("Inside catch");
//     console.log(error);
//   });

//Working of this code:

//URL fetch hone k baad fetch promise return karta hai means .then() lag sakta hai and fetched value will go to the response parameter, here we can check if response.ok is true since response.ok tab hi true hoga jab URL data sahi se ajaiga. Now, response.json() return keyword k sath use hoga means promise resolve ho k next .then() me jaiga and data parameter me json value receive hogi and console me print hojaigi. Aur agar error hua to error print hoga

//Fetch Example with POST Method

//POST request will be done at this server

const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(URL, {
  method: "POST",
  body: JSON.stringify({                //JSON.stringify will convert this object into JSON data, we are sending data in JSON
    title: "foo",
    body: "bar",
    userId: 1,
  }),


  headers: {
    "Content-type": "application/json; charset=UTF-8",
  }, })
 // The server will process this data, and if the request is successful, it will return a response, which you can handle in the .then() block.  
  .then((response) => {                  
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Something went wrong");
    }
  })
  .then((jsondata) => {
    console.log(jsondata);
  })
  .catch((error) => {
    console.log("Inside catch");
    console.log(error);
  });
