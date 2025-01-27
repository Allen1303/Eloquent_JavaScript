"use strict";
/* Control Flow Demo*/
/*Looping a Triangle  */
for (let triangle = "#"; triangle.length <= 7; triangle += "#") {
  console.log(triangle);
}
/* Fizz Buzz Exercise */

for (let index = 1; index <= 100; index++) {
  if (index % 3 === 0 && index % 5 === 0) {
    console.log("FizzBuzz");
  } else if (index % 3 === 0) {
    console.log("Fizz");
  } else if (index % 5 === 0) {
    console.log("Buzz");
  }else{
    console.log(index);
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