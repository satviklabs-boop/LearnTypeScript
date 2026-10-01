let arr1: number[] = [1, 2, 3];
let arr2: number[] = [4, 5, 6];

let merged: number[] = new Array(arr1.length + arr2.length);

// Copy first array
for (let i = 0; i < arr1.length; i++) {
    merged[i] = arr1[i];
}

// Copy second array
for (let i = 0; i < arr2.length; i++) {
    merged[arr1.length + i] = arr2[i];
}

console.log(merged);