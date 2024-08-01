

//The basic use of try catch is if we run into an error, the code should not stop executing and should execute the next line. 
// The idea behind using try catch is to execute and run program if an error arises, that error should not stop our code from running

console.log("Hey 1"); //runs

try{
    console.log(hey); //error
}
catch(err){
console.log(err)  //prints the error 
}

console.log("Hey 2"); //runs