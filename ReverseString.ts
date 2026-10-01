export {}; // makes this file a module so `str` is file-scoped instead of shared global scope

let str: string = "Hello";
let reversed: string = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
}

console.log("Reversed string:", reversed);
