//Inheritance means one class can acquire the properties and methods of another class.
//Inheritance allows a child class to reuse the properties and methods of a parent class.
//In TypeScript, we use the extends keyword.
class Animal {

    eat(): void {
        console.log("Animal is eating");
    }
}

class Dog extends Animal {

    bark(): void {
        console.log("Dog is barking");
    }
}

let dog = new Dog();

dog.eat();
dog.bark();