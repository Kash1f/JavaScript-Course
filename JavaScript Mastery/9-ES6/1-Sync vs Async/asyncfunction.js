// let test = async () => "Hello";

// test().then((result)=>{
//     console.log(result);
// })

//agar ye function kuch bhi return karega aur successfully chal jata hai to ye then function apne aap call hojaiga aur jo bhi variable .then() k parameters me hoga like result in this case to jo value async function se return ho k aaigi to wo return value usme save hojaigi aur phir run hojaigi

/*
async function test() {
  console.log("2: Message");
  await console.log("3: Message");
  console.log("4: Message");
}

console.log("1: Message");
test();
console.log("5: Message");
*/

async function test() {
    console.log("2: Message");
    const response = await fetch("students_data.json")
    console.log("4: Message");
  }
  
  console.log("1: Message");
  test();
  console.log("5: Message");