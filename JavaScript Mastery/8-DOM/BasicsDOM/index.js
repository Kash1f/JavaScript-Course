//4 of Pillars of DOM

//1. Selection of an element - An element written in HTML can be selected in Javascript code
//2. Changing HTML - An element written in HTML, so it's HTML can be changed while writing JS code.
//3. Changing CSS - styling in CSS file can be changed while writing JS code.
//4. Event Listeners - 

//1. Selection of an element
document.querySelector("h1");

//2. Changing HTML
//Method 1 if the usage is only once
document.querySelector("h1").innerHTML = "Method 1 to change HTML";

//Method 2 if the usage is more than once
var a = document.querySelector("h2");
a.innerHTML = "Method 2 to change HTML";


//3. Changing CSS
document.querySelector("h1").style.color = "red";

var a = document.querySelector("h2");
a.style.color = "blue";
a.style.backgroundColor = "yellow";  //use camelCase in CSS property
 

//4. Event Listeners

var a = document.querySelector("h1");

//attaching event listener(click) to h1 i.e var a, () will have two parameters, the first one is the event that which event will be performed(events are predefined), the second one is the target element.
//Jese hi h1 pe click hoga to ye function execute hojaiga

a.addEventListener("click", function(){
    a.innerHTML = "Changed through Event Listener";
    a.style.color = "blue";
    a.style.backgroundColor = "yellow";
});