//Higher Order Functions

function x(){
    console.log("Hello");
}

//Here function y takes function x as argument so function y is the HOC
function y(x){
    x();
}