//A static block in TypeScript is used to perform one-time initialization of static class members. It executes when the class is initialized and does not require an object to be created.


class Counter {

    static count: number;

    static {
        Counter.count = 100;
        console.log("Initializing counter...");
    }

    static display(): void {
        console.log("Count =", Counter.count);
    }
}

Counter.display();