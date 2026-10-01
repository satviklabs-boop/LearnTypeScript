let a: number = 10;
let b: number = 20;

console.log("Before swap: a =", a, "b =", b);

a = a + b;
b = a - b;
a = a - b;

console.log("After swap: a =", a, "b =", b);
//let a: number = 10;
//let b: number = 20;

//console.log("Before swap: a =", a, "b =", b);

//let temp: number = a;
//a = b;
//b = temp;

//console.log("After swap: a =", a, "b =", b);