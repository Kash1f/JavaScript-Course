

//primitive = number, string, null
//reference = [] () {}

//aisi koi bhi value jisko copy karne pe real copy nahi hota bal k uska reference pass hojata hai, usay hum reference value kehte hain, aur jisay copy karne pe real copy hojai to wo value primitive type value hoti hai

var a =[1,2,3,4]

var b = a;

b.pop();

console.log(a);

//b me changes kiye to wo automatically b me bhi hojaingy
//b me pop kiya to a se value out hogayi
//jahan bhi bracket me kuch ho to wo refernce type hai aur jahan bracket na ho to wo primitive 