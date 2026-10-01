//A constructor in TypeScript is a special method that is automatically called when an object is created. It is mainly used to initialize class properties. A class can have only one constructor implementation in TypeScript.
class Student {

    constructor(
        public name: string,
        public age: number
    ) {
    }

    display(): void {
        console.log(this.name);
        console.log(this.age);
    }
}

let student = new Student("Rahul", 25);

student.display();

//TypeScript allows multiple constructor signatures, but only one constructor implementation.
//TypeScript does not support multiple constructor implementations. Constructor overloading is achieved using multiple constructor signatures and a single implementation, usually with optional parameters or union types.

//For example, this is not allowed:

// ❌ Invalid TypeScript

//constructor(name: string) {
//}

//constructor(name: string, age: number) {
//}

class Student {

    name: string;
    age: number;

    // Constructor overload signatures
    constructor(name: string);
    constructor(name: string, age: number);

    // One implementation
    constructor(name: string, age?: number) {
        this.name = name;
        this.age = age ?? 0;
    }

    display(): void {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}

let student1 = new Student("Rahul");
let student2 = new Student("Amit", 25);

student1.display();
student2.display();