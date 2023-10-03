//for loop

// for(let i=0; i<10; i++){
//     console.log("Hi");
// }

// let i = 0;

// console.log(i++);
// console.log(i);
// console.log(i++);
// console.log(i);

// let j = 0;

// console.log(++j);
// console.log(j);
// console.log(++j);
// console.log(j);


// //while loop

// const k = 0;

// while(i < 10){

// console.log("Hi");

// }

//for of loop

const fruitss = ["mango", "apple", "grapes"]

for(let fruit of fruitss){    //here each value of the above array will be stored in the
                            //fruit variable and will be prited one by one
    console.log(fruit);
}

const groceryList = ["rice", "soap", "wheat", "bread"]

for (let grocery of groceryList){
    console.log(grocery);
}

//for in loop

const fruits = ["mango", "apple", "grapes"]

for(let index in fruits){
    console.log(index);
}

const groceryLists = ["rice", "soap", "wheat", "bread"]

for (let grocery in groceryLists){
    console.log(grocery);
}