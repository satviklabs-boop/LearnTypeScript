let arr: number[] = [10, 20, 30, 40, 50, 60];

for (let i = 0; i < arr.length/2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
}

console.log(arr);