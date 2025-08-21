

// function Person(fname, lname, age){
//     this.fname = fname;
//     this.lname = lname;
//     this.age = age;
// }

// const person1 = new Person("John", "Doe", 30);
// console.log(person1);

class Person {
    constructor(fname, lname, age){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }

    getName() {
        console.log(this.fname, this.lname);
    }
    getAge() {
        console.log(this.age);
    }
}

const person1 = new Person("John", "Doe", 30);
// const person2 = new Person("Jane", "Doe", 32);
person1.getName();
person1.getAge();
