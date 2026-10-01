// Makes this file a module so its top-level variables are file-scoped
// instead of merging into the shared global scope — otherwise `sum`
// collides with `sum` in AddNumbers.ts (a non-module script).
export {};

let num: number = 153;
let original: number = num;
let digitSum: number = 0;

while (num > 0) {
  let digit: number = num % 10;
  digitSum = digitSum + digit ** 3;
  num = Math.floor(num / 10);
}

if (digitSum === original) {
  console.log(original + " is an Armstrong number");
} else {
  console.log(original + " is not an Armstrong number");
}
