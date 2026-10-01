export {}; // makes this file a module so `str` is file-scoped instead of shared global scope

let str = "Hello World";

for (let i = 0; i < str.length; i++) {
    let ch = str[i].toLowerCase();

    if (ch >= "a" && ch <= "z" &&
        ch != "a" && ch != "e" && ch != "i" && ch != "o" && ch != "u") {
        console.log(ch);
    }
}
