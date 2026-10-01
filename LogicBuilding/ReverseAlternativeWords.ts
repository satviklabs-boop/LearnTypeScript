export {}; // makes this file a module so its variables are file-scoped instead of shared global scope

let str = "I am learning TypeScript programming";

let words = str.split(" ");

for (let i = 1; i < words.length; i += 2) {

    let word = words[i];
    let rev = "";

    for (let j = word.length - 1; j >= 0; j--) {
        rev = rev + word[j];
    }

    words[i] = rev;
}

let result = "";

for (let i = 0; i < words.length; i++) {
    result = result + words[i] + " ";
}

console.log(result);
