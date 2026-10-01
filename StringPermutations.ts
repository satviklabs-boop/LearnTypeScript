let str: string = "ABCDEF";

function permute(str: string, start: number): void {

    // If we reached the last character
    if (start === str.length - 1) {
        console.log(str);
        return;
    }

    for (let i = start; i < str.length; i++) {

        // Swap current character with i
        str = swap(str, start, i);

        // Fix current character and permute remaining
        permute(str, start + 1);

        // Backtrack
        str = swap(str, start, i);
    }
}

function swap(str: string, i: number, j: number): string {

    let arr: string[] = str.split("");

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    return arr.join("");
}

permute(str, 0);