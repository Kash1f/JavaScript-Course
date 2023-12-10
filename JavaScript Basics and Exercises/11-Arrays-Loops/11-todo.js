
//creating an empty array
const todoList = []


//Reminder: document.querySelector will get an  element with classname "js-name-input" i.e the input element in our html and puts it in our js. 

//ye tareeka hai to get anything from html and use it in javascript

function addTodo() {

    //the element with class js-name-input will get in doc.q.s and will be saved in this inputElement

    const inputElement = document.querySelector('.js-name-input')

    //inputElement has the class saved it in which we got via doc.q.S and isay .value k sath use karne se jo bhi value inputElement me hogi wo hum name variable me store kardengy 

    const name = inputElement.value

    //now using push with array variable and passing name into it will make this code push whatever the value will be typed in the input box
    
    todoList.push(name)
    console.log(todoList);
}