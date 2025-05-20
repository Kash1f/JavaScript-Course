
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

//1. Filter method
//assume we want to get the items in this list that are less than or equal to 100$, we can use the filter method to filer out everything that's not under a hundred dollars


//filter method takes a single callback function which has one parameter item, which is just each item inside the array, we'll return true or false statement on whether we want to include the item in the new array so we can say just return item.price <= 100 to the new array
const filteredItems = items.filter((item) => {
    return item.price <= 100;
})

//items that are less than or equal to 100$ will be in the new array filteredItems array
console.log(filteredItems)


//2. Map method
//map method takes a single callback function which has one parameter item, which is just each item inside the array, we'll return a new value for each item in the array and a new array will be created with the new values

const mappedItems = items.map((item)=>{
    return item.name
})

console.log(mappedItems) //

//3. Find method
// find method takes a single callback function which has one parameter item, which is just each item inside the array, we'll return the first item that matches the condition

const foundItem = items.find((item)=>{
    return item.price === 400
})

console.log(foundItem)