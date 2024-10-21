
function add(a,b){
    return a + b;
}

function display(x,y,operation){
    var result = operation(x,y)
    console.log(result);
}

display(10,5,add);
