
//Type-1 => Factory function
function MakePerson(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hi my  name is ${this.name}`)
        }
    }
    return person
}

let p1 = MakePerson("suraj", 23)
let p2 = MakePerson("ajeet", 23)

//Type-2 => Constructor does not return anything & start with capital letter
function People(name, age) {
    this.name = name;
    this.age = age;
}

People.prototype.talk = function () {
    console.log(`I am taking ${this.name}`)
}

let pe1 = new People("Suraj", 23);
let pe2 = new People("gopal", 23);

//Type-3 => Constructor simple way to to write using  class

class Car {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }
    runnig() {
        console.log(`I am running ${this.name}`)
    }
}

let cr1 = new Car("suraj", 23);
let cr2 = new Car("ajeet", 23);

//Type-3 => inheritance 

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`My name is ${this.name}`)
    }
}

class Student extends Person {
    constructor(name, age, marks) {
        super(name, age)
        this.marks = marks;
    }
    talk() {
        console.log(`I am taking my name is ${this.name}`)
    }
}

class Teacher extends Person {
    constructor(name, age, syllabus) {
        super(name, age)
        this.syllabus = syllabus;
    }
    talk() {
        console.log(`I am taking my name is ${this.name} and i am teaching ${this.syllabus}`)
    }
}

let student1 = new Student("Suraj", 23, 90);
let teacher1 = new Teacher("Vijay", 25, "Math")