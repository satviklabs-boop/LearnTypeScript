//Polymorphism means one name, many forms.
//A common example is method overriding.
//Polymorphism allows the same method to behave differently depending on the object.

class Animal {

    sound(): void {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {

    sound(): void {
        console.log("Dog barks");
    }
}

class Cat extends Animal {

    sound(): void {
        console.log("Cat meows");
    }
}

let dog = new Dog();
let cat = new Cat();

dog.sound();
cat.sound();

//Overlaoding
//You define multiple overload signatures, but provide only one implementation.
//In Java, you can have multiple methods with the same name and different parameters:
//add(int a, int b)
//add(int a, int b, int c)
//add(double a, double b)
//In TypeScript, you cannot write multiple implementations like this:

// ❌ Not allowed

//add(a: number, b: number) {
//}

//add(a: number, b: number, c: number) {
//}


class Calculator {

    add(a: number, b: number): number;
    add(a: string, b: string): string;

    add(a: any, b: any): any {
        return a + b;
    }
}

let calc = new Calculator();

console.log(calc.add(10, 20));
console.log(calc.add("Hello ", "World"));