let arr = [1, 2, 3, 4, 5];//51234...45123..34512
let rotations = 1;

for (let r = 0; r < rotations; r++) {

    let first = arr[0];

    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }

    arr[arr.length - 1] = first;
}

console.log(arr);