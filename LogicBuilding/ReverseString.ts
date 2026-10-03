export {}; // makes this file a module so `str` is file-scoped instead of shared global scope

let str: string = "Hello";
let reversed: string = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
}

console.log("Reversed string:", reversed);
//reverse string but keep numbers at space place
// function reverseStringKeepNumbers(str: string) {
//     let chars = str.split('');
//     let left = 0;
//     let right = chars.length - 1;

//     while (left < right) {

//         if (/\d/.test(chars[left])) {
//             left++;
//         } else if (/\d/.test(chars[right])) {
//             right--;
//         } else {
//             let temp = chars[left];
//             chars[left] = chars[right];
//             chars[right] = temp;

//             left++;
//             right--;
//         }
//     }

//     return chars.join('');
// }

// console.log(reverseStringKeepNumbers("a1b2c3d"));
