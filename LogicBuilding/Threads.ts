//TypeScript runs on JavaScript, and JavaScript normally executes code on a single main thread. However, you can achieve multithreading using Web Workers in browsers or Worker Threads in Node.js.
//For Playwright/Node.js, the most relevant approach is Worker Threads.
//Main.ts
import { Worker } from "worker_threads";

const oddWorker = new Worker("./odd.ts");
const evenWorker = new Worker("./even.ts");

oddWorker.on("message", (message) => {
    console.log("Odd Thread:", message);
});

evenWorker.on("message", (message) => {
    console.log("Even Thread:", message);
});

//odd Worker.ts
import { parentPort } from "worker_threads";

for (let i = 1; i <= 10; i += 2) {
    parentPort?.postMessage(i);
}

//even worker.ts thread
import { parentPort } from "worker_threads";

for (let i = 2; i <= 10; i += 2) {
    parentPort?.postMessage(i);
}