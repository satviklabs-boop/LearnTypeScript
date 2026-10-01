let arr = [10, 20, 10, 30, 20, 40];

let result: number[] = [];

for (let i = 0; i < arr.length; i++) {

    let duplicate = false;

    for (let j = 0; j < result.length; j++) {

        if (arr[i] === result[j]) {
            duplicate = true;
            break;
        }
    }

    if (duplicate === false) {
        result.push(arr[i]);
    }
}

console.log(result);
//let arr: number[] = [10, 20, 10, 30, 20, 40];

//let result = new Set(arr);

//console.log(result);