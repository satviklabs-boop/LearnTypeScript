export {}; // makes this file a module so its variables are file-scoped instead of shared global scope

function reverseWithSpacesTwoPointers(str: string): string {
  const arr = str.split('');
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] === ' ') {
      left++;
    } else if (arr[right] === ' ') {
      right--;
    } else {
      // Swap non-space characters
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }

  return arr.join('');
}

console.log(reverseWithSpacesTwoPointers("ab cd ef"));
