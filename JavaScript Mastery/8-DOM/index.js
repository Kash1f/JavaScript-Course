// const thisOne = document.getElementById('okay')
// console.log(thisOne);


function hello(){
    const heading = document.querySelector('h1');
    if(heading.innerHTML === "Hello"){
        heading.innerHTML = "Goodbye"
    }
    else{
        heading.innerHTML = "Hello";
    }
}