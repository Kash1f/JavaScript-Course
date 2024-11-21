//4 of Pillars of DOM

//1. Selection of an element - An element written in HTML can be selected in Javascript code
//2. Changing HTML - An element written in HTML, so it's HTML can be changed while writing JS code.
//3. Changing CSS - styling in CSS file can be changed while writing JS code.
//4. Event Listeners - 

//1. Selection of an element
document.querySelector("h1");

//2. Changing HTML
document.querySelector("h1").innerHTML = "Method 1 to change HTML";

var a = document.querySelector("h2");
a.innerHTML = "Method 2 to change HTML";
