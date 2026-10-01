let arr = [16, 17, 4, 3, 5, 2];

for (let i = 0; i < arr.length; i++) {

    let leader = true;

    for (let j = i + 1; j < arr.length; j++) {

        if (arr[i] <= arr[j]) {
            leader = false;
            break;
        }
    }

    if (leader) {
        console.log(arr[i]);
    }
}