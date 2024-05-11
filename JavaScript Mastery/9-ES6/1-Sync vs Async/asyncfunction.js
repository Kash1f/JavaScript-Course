


async function test(){
    return "Hello";
}

test().then((result)=>{
    console.log(result);
})

//agar ye function kuch bhi return karega aur successfully chal jata hai to ye then function apne aap call hojaiga aur jo bhi variable .then() k parameters me hoga like result in this case to jo value async function se return ho k aaigi to wo return value usme save hojaigi aur phir run hojaigi