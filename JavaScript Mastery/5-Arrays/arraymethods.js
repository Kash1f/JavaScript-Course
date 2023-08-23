//1. push
//push will add the passed number at the END of the array

let arrPush = [1,2,3,4,5,6,7,8,9]

arrPush.push(10);
console.log(arrPush);

//2. pop
//pop will remove the last element from the END of the array

let arrPop = [1,2,3,4,5,6,7,8,9]

arrPop.pop();
arrPop.pop();
arrPop.pop(); 
console.log(arrPop);

//3. shift
//shift will remove the FIRST element from the START of the array
let arrShift = [1,2,3,4,5,6,7,8,9]

arrShift.shift(); 
arrShift.shift();
arrShift.shift();
console.log(arrShift);

//4. unshift
//unshift will remove the FIRST element from the START of the array
let arrUnshift = [40,50,60,70]

arrUnshift.unshift(10); 
arrUnshift.unshift(20);
arrUnshift.unshift(30);
console.log(arrUnshift);

//5. splice
//splice will delete elements from the middle of an array

let arrSplice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//we have to remove 7, 8, 9 here, so we will enter the index number of 7 and 3 as we have to remove 3 numbers
arrSplice.splice(6,3);

console.log(arrSplice);

//6. reverse
//reverse will reverse the array, from end to start

let arrayReverse = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arrayReverse.reverse();

//this will add the 1000 number at the start of the reversed array
arrayReverse[0] = 1000; 
//this will make the value of 10 = 1000

console.log(arrayReverse);

//7. slice
//slice will return a new array of selected index and length

let arraySlice =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newArraySLice = arraySlice.slice(1, 4);
//1st index se le k 4th index se pehle tak


console.log(arraySlice);
console.log(newArraySLice);


//includes


let arrIncludes =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let ans = arrIncludes.includes(4);

console.log(arrIncludes);
console.log(ans);