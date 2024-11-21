

//When the button ON is clicked, it should change the color of the bulb to grey.




var bulb = document.querySelector("#bulb");
var button = document.querySelector("button");

var flag = 0;

button.addEventListener("click", function(){
  if(flag == 0){
    bulb.style.backgroundColor = "yellow";
    flag = 1
}  else {
    bulb.style.backgroundColor = "transparent";
    flag = 0;
}
});

var bulb = document.querySelector("#bulb");
var button = document.querySelector("button");

button.addEventListener("click", function(){
    bulb.style.backgroundColor = 
    bulb.style.backgroundColor === "yellow" ? "transparent" : "yellow";
});
