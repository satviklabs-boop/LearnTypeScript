let str1 = "listen";
let str2 = "netsil";

// Files without imports/exports share one global scope, so names must not
// collide with declarations in the other scripts (e.g. `reverse` and `str`
// in ReverseInteger.ts / ReverseString.ts). Unique names keep this file clean.
let reversedText: string = "";
for (let i = str1.length - 1; i >= 0; i--) {
  reversedText = reversedText + str1[i];
}

if (reversedText === str2) {
  console.log("Anagram");
} else {
  console.log("Not an Anagram");
}

// Makes this file a module, so its top-level variables are file-scoped
// instead of being merged into the shared global scope.
export {};
