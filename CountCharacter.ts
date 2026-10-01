export {}; // makes this file a module so `str` is file-scoped instead of shared global scope

let str = "hello";

let map = new Map<string, number>();

for (let i = 0; i < str.length; i++) {

    let ch = str[i];

    if (map.has(ch)) {
        map.set(ch, map.get(ch)! + 1); //map.get(ch)!..this will tell it not not undefind and will ..use as number
    } else {
        map.set(ch, 1);
    }
}

console.log(map);
