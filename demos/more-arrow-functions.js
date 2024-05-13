"use strict";

function mutliply(a, b) {
  return a * b;
} //function declaration
(a, b) => a * b; //arrow function

function add(a, b) {
  return a + b;
}
(a, b) => a + b;


function divide(a,b) {
    return a/b;
}
(a,b)=> a/b;

function print(value){
    console.log(value);
}
//value=> console.log(value);
let print = value=> console.log(value);

print("test")

// function addThenDivideTheResult(a,b) {
//     let result1 = add(a, b);
//     let result2 = divide(result1, 1);
//     return result2;
// }







// function add(a, b) {
//   return a + b;
// }

// let result = add(2, 2);
// console.log(result);

// let add1 = (a, b) => {
//   return a + b;
// };

// let result1 = add1(2, 2);
// console.log(result1);
