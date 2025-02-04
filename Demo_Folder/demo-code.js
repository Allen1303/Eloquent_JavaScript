"use strict";
/* Control Flow Demo*/
/*Looping a Triangle  */
for (let triangle = "#"; triangle.length <= 7; triangle += "#") {
  console.log(triangle);
}
/* Fizz Buzz Exercise */

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  }else{
    console.log(i);
  }
}
/**
 * @param chessboard  Challenge
 Write a program that creates a string that represents an 8 x 8 grid, using new-line characters to separate  lines . At each position of the grid there ia either a space or "◼️", "◽️", which should form a chessboard.
 */
let size  = 8;
let board = ""

for (let index = 0; index < size; index++) {
for (let index2 = 0; index2 < size ;  index2++) {
  if ((index + index2) % 2 === 0) {
    board += "◽️";
  }else{
board += "◼️";
  };
}; 
board += "\n";
};
console.log(board);
/**Feb 4th 2025
 * @param Minimum Exercise 
 * Create a function Min that takes 2o argument and return their minimum
 */
const min = (num1, num2) => {
    return Math.min(num1, num2);
};
console.log(min(5, 10));
/**
 * @param Recursion Exercise
 * zero is even and One is odd, for any other number N is the same as N - 2.
 * Create a recursive function isEven that accept a single parameter(a positive whole number) and return a boolean test the function with the values 50 and 75 on -1
 */
function isEven(n) {
    if (n === 0) return true;
    if(n === 1) return false;
    if(n < 0) return isEven(-n)
return isEven(n - 2)
}
console.log(isEven(50));