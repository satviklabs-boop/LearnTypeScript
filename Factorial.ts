import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input) => {

    let num: number = Number(input);
    let factorial= 1;

    for (let i = 1; i <= num; i++) {
        factorial = factorial * i;
    }

    console.log("Factorial = " + factorial);

    rl.close();
});