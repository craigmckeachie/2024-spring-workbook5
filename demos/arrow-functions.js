"use strict";

//before
function multiply(a, b) {
  return a * b;
}

console.log(multiply(5, 5));

//after
let multiply2 = (a, b) => a * b;
console.log(multiply2(5, 5));
