let numbers= [1, 2, 3, 4, 6, 7];

let total= 7;
let expectedSum: number = total * (total + 1) / 2;

let actualSum: number = 0;

for (let num of numbers) {
    actualSum = actualSum + num;
}

let missingNumber: number = expectedSum - actualSum;

console.log("Missing Number = " + missingNumber);