let int=123;
let reverse:number=0;
while (int>0){
    let digit=int%10;
    reverse=(reverse*10)+digit;
    int=Math.floor(int/10);
}
console.log(reverse);
