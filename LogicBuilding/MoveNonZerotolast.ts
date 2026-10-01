let arr: number[] = [0, 1, 0, 3, 12];

let index = 0;

// Move non-zero elements to the front
for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
        arr[index] = arr[i];
        index++;
    }
}

// Fill remaining positions with zeros
while (index < arr.length) {
    arr[index] = 0;
    index++;
}

console.log(arr);