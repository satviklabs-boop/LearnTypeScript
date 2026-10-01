//In TypeScript, exception handling is done using try, catch, finally, and throw. The try block contains risky code, catch handles the error, finally executes regardless of whether an error occurs, and throw is used to explicitly generate an exception.
//TypeScript/JavaScript does not support multiple catch blocks for a single try, unlike Java.
let num = -5;

try {
    if (num < 0) {
        throw new Error("Number cannot be negative");
    }

    console.log("Number is:", num);
}
catch (error) {
    console.log("Exception:", error);
}
finally {
    console.log("Program completed");
}
