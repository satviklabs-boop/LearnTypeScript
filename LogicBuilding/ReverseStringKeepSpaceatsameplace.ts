export {}; // makes this file a module so its variables are file-scoped instead of shared global scope

let str = "ab cd ef";

let result = "";
let j = str.length - 1;

for (let i = 0; i < str.length; i++) {

    if (str[i] === " ") {
        result = result + " ";
    } else {
        while (str[j] === " ") {
            j--;
        }

        result = result + str[j];
        j--;
    }
}

console.log(result);
