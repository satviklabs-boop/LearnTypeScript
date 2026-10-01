let arr: number[] = [10, 20, 30, 40, 50, 60, 70];
let target: number = 40;

let low: number = 0;
let high: number = arr.length - 1;
let found: boolean = false;

while (low <= high) {

    let mid: number = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
        console.log("Element found at index:", mid);
        found = true;
        break;
    }
    else if (arr[mid] < target) {
        low = mid + 1;
    }
    else {
        high = mid - 1;
    }
}

if (!found) {
    console.log("Element not found");
}