

// function Person(fname, lname, age){
//     this.fname = fname;
//     this.lname = lname;
//     this.age = age;
// }

// const person1 = new Person("John", "Doe", 30);
// console.log(person1);

function Person(fname, lname, age){
    this.fname = fname;
    this.lname = lname;
    this.age = age;

    this.getName = function(){
        console.log(this.fname, this.lname);
    }
    this.getAge = function(){
        console.log(this.age);
    }
}

const person1 = new Person("John", "Doe", 30);
const person2 = new Person("Jane", "Doe", 32);
person2.getName();
person2.getAge();
