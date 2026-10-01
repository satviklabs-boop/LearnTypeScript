let num: number = 12345;
let reverse: number = 0;

while (num > 0) {
    let digit = num % 10;
    reverse = reverse*0+digit;
    num = parseInt((num / 10).toString());
}

console.log(reverse);