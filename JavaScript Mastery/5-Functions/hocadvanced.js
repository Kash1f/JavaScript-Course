function x(){
    console.log("Hello");
}

//Here function y takes another function x as argument so function y is the HOC, x is the callback function here
function y(x){
    x();
}
