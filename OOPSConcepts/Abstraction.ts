//Abstraction means hiding implementation details and showing only the required functionality.
//Abstraction hides the implementation details and exposes only the necessary functionality.
//In TypeScript, we can use an abstract class.
abstract class Vehicle {

    abstract start(): void;

    stop(): void {
        console.log("Vehicle stopped");
    }
}

class Car extends Vehicle {

    start(): void {
        console.log("Car started");
    }
}

let car = new Car();

car.start();
car.stop();

