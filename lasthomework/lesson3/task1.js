/*Task - 1
  Replace the "for" loop with a "while" loop*/ 

let i = 0
while (i < 8) {
  console.log( `число - ` + i++);
}





/*Task - 2
  Implement algorithm which will calculate sum of numbers from 0 to 50 (included) not divisible by 3.
  Use 3 different cycles: for | while | do..while */

// FOR

let numberFOR = 0;

for (let i = 0; i <= 50; i++) {
  if (i % 3 !== 0) {
    numberFOR += i;
  } 
}
console.log("Сума циклу", numberFOR);

// WHILE

let sumWhile = 0;
let numWhile = 0;
while (numWhile <= 50) {
  if (numWhile % 3 !== 0) {
    sumWhile += numWhile;
  }
  numWhile++;
}

console.log("Сума циклу:", sumWhile);

// DO_while
let sumDoWhile = 0;
let numDoWhile = 0;

do {
  if (numDoWhile % 3 !== 0) {
    sumDoWhile += numDoWhile;
  }
  numDoWhile++;
} while (numDoWhile <= 50);

console.log("Сума:", sumDoWhile);

/* Task - 3
  Implement algorithm which will
  calculate sum of numbers from firstNumber to secondNumber (included)
  Use for loop  
*/

let firstNumber = -100;
let secondNumber = 250;
let sum = 0;

for (let i = firstNumber; i <= secondNumber; i++) {
  sum += i;
}
console.log("Сума:", sum);

/* Task - 4
  Make a timer that will count from 10 to 0

  For example,
  10 seconds left
  9 seconds left
  8 seconds left 
*/
let timer = 10;
for (i = timer; i >= 0; i--) {
  console.log(i + "seconds left")
}


/* Task - 5
  Create program to display the following sequence: 7 14 21 28 35 42 49 */

  let number = 7;
  for (let i = 1; i <= 7; i++ ) {
    console.log(number * i);
  }

/* Task - 6
  implement algorithm which calculates factorial for 
  using for, while, do..while operators
  assign the result to corresponding variable
  what is factorial: https://www.mathsisfun.com/numbers/factorial.html 
*/

// FOR

let number = 3;
let factorial = 1; 

for (let i = 1; i <= number; i++) {
  factorial *= i;} 
console.log("Factorial", factorial);



/* Task - 7
  implement algorithm filling a bathtub using buckets. 
  we know how many liters the bathtub holds and the capacity of one bucket, but we don't know how many buckets we need. 
  We need to fill the bathtub without overflowing it.
  Use while loop 
*/


let bucket = 5;
let initialBathState = 0; 
let bathCapacity = 60; 
let bucketsneeds =0;

while (initialBathState < bathCapacity) {
  initialBathState += bucket;
  bucketsneeds++;

}
console.log ("Потрібно відер: " + bucketsneeds)