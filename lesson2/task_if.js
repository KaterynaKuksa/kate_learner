// 'if' conditional

/* Task - 1
 Create a program that will store the value of the cat's weight. 
If the cat weighs less than 5 kg, then the cat is small and still needs to be fed, 
if it weighs more than 5, then the cat is very fluffy and needs to be combed :) */

let cat = 4 // real parameters of my cat
if (cat < 5) {console.log ("Пригостити рибкою")} 
else if (cat > 5) {console.log ("Вичесати котика")} 

/* Task - 2
Write an if condition to check if the age value is NOT between 18 and 50 inclusive, if it is not, then hire */

let age = 19;
if (age <= 18 && age >= 50) {
    console.log("you got hired")
}
else { console.log("Look for another job, loser") }

/* Task - 3
Write a program for checking grades.
If the grade is A and B, the student has passed the exam
If C and D - we send them for a retake
If E - expulsion. */

let grade = "D";
if (grade == "A" ) {
    console.log("passed the exam")
}
else if (grade == "B") {
    console.log("passed the exam")
}
else if (grade == "C") {
    console.log("we send them for a retake")
}
else if (grade == "D") {
    console.log("we send them for a retake")
}
else if (grade == "E") {
    console.log(expulsion)
}





/* Task - 4
 Write a small program "Guess the number", where you need to enter a number from the console and tell the user whether he entered less or more or guessed the number. */

 // number 7

var number = 75;

if (number == 7) {
    console.log("Число " + number + " - вірне")
} else if (number < 7) {
    console.log("Число " + number + " - ви обрали менше число ")
} else if (number > 7) {
    console.log("Число " + number + " - ви обрали більше число ")
}

 // Task - 5
//Rewrite the if statement using the conditional operator '?


var height = 156;
var message = height < 140 ? "Заборонено!" : "Можете їхати";
console.log(message);


/* Task - 6

Rewrite if..else using several ternary operators '? */

var height = 138;

var message = height < 50 ? "Forbidden to use attraction" :
height >= 50 && height < 80 ? "Permit - attraction №1" :
height >= 80 && height < 120 ? "Permit - attraction №1 or №2" :
"Permit - All";

console.log(message);



//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 'switch' conditinal

/* Task - 7
 Create a program that will print the day of the week according to the day number. */

/* Task - 8
 Make a program that will display the time of year a particular month number belongs to (for example, I enter "1" and it tells me that it is winter, I enter "5" - spring, etc.) */

 /* Task - 9
 Rewrite the "switch" into an "if"
 
 switch (browser) {
  case 'Edge':
    console.log( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    console.log( 'We hope that this page looks ok!' );
}
 */

/* Task - 10
Rewrite "if" into "switch" 

let age = 16;
if (age < 16) {
    console.log( 'We cant hire u!' );
}
if (age >= 18) {
  console.log( 'U can take full time job' );
}

if (age == 16 || a == 17) {
  console.log( 'U can take part time job' );
}
*/



//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* Task - 11
Create a program  - https://take.ms/mN65i 

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”

Use only what've learned!

*/