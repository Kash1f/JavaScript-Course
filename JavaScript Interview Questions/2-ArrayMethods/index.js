
//filter, map, find, forEach, some, every, reduce, includes

const items = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'orange', price: 30 }, 
    { name: 'grape', price: 400 },
    { name: 'mango', price: 5 },  
    { name: 'pineapple', price: 80 },
    { name: 'watermelon', price: 1000 },
]

const items2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

//1. Filter method
//assume we want to get the items in this list that are less than or equal to 100$, we can use the filter method to filer out everything that's not under a hundred dollars


//filter method takes a single callback function which has one parameter item, each item inside the array, we'll return true or false statement on whether we want to include the item in the new array so we can say just return item.price <= 100 to the new array
const filteredItems = items.filter((item) => {
    return item.price <= 100;
})

console.log(filteredItems)


//2. Map method
//map method takes a single callback function which has one parameter item, each item inside the array, we'll return a new value for each item in the array and a new array will be created with new values

const mappedItems = items.map((item)=>{
    return item.name
})

console.log(mappedItems)

//3. Find method
//find method takes a single callback function which has one parameter item, each item inside the array, this is just going to return thge very first item that it finds in the array that returns true for the statement that you pass inside of this find function.

const foundItem = items.find((item)=>{
    return item.price === 400
})

console.log(foundItem)

//4. ForEach method
//forEach method does not return anything, it just iterates through the array and executes the callback function for each item in the array

items.forEach((item)=>{
    console.log(item.name)
})

//4. Some method
//some method is a bit different as it returns a boolean value, it takes a single callback function which has one parameter item, each item inside the array, this is just going to return true if any of the items in the array returns true if the condition is satisfied.

const hasExpensiveItems = items.some((item)=>{
    return item.price > 100;
})

console.log(hasExpensiveItems)

//5. Every method
//this is similar to some method, except for that it checks for every item in the array to return true if the condition is satisfied
const hasInexpensiveItems = items.every((item)=>{
    return item.price <= 1000;
})

console.log(hasInexpensiveItems)

//6. Reduce method
//reduce method is a bit different than other methods since it performs operations on an array and returns a combination of all those different operations, so if we want to get the total price of all the items in the array, normally this can be done via for loop in which we add each item everytime and at the end of the loop we print out the price. Here, it takes two parameters, an item and a property for what we want to reduce everything into, in our case it'll be the currentTotal

const totalPrice = items.reduce((currentTotal, item)=>{
    return item.price + currentTotal;
}, 0)

console.log(totalPrice)

//6. Includes method
//this method is a bit different as well because it doesn't take a callback function, we pass in the item we want to check if it exists in the array, if it does, it returns true, otherwise it returns false

const appleExists = items2.includes(4)
console.log(appleExists)