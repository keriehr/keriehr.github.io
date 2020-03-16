/*
*
* CONTROL FLOW: 
*
*       0. Control flow is the order in which our computer carrys out statements in our code.        
*       We use conditional statements, loops and functions as our instructions for the computer to follow.    
*       Control flow means that it's not only reading our script from start to finish, but it also looks at the programs 
*       structure and how it affects the order of actions to be executed.
*/



// 1. IF (statement) //
// When using the keyword IF to check for a specific condition.
// There can only be one if in an if statement.
// Runs our code only if the condition is true.
// the condition we set is any Boolean value or Boolean expression.
// Syntax : if (conditions) { runs our code set here}
// Example:
var dryTowels = true;

if (dryTowels) {
  console.log('Can you fold them?'); // prints => Can you fold them?
}

// 2. ElSE IF //
// When using the keyword ELSE IF to check for another condition.
// You can have as many else if in a else is statement as you would like.
// Runs our code if condition is true, but only if the previous statement was false.
// Syntax : if (conditions) {our code set here}
//     else if (conditions) { run this code if this condition is true}
// Example:

var sweater = "soft" ;

if (sweater === 'itchy') {
  console.log('throw it away'); // prints => throw it away
} 
else if (sweater === 'soft')
{console.log('GIVE IT TO  ME!')} // prints => give it to me

// 3.ELSE  //
// When using the keyword ELSE to run our code block if all other conditions are false.
// There can be only one else in the statement and at the bottom.

var num  = 15;

if (num < 5) {
  console.log("lil bit");
}
else if (num < 10) 
{console.log('monkey in the middle')}
else if (num < 14)
{console.log('Chonk')}
else {console.log('THIS IS THE DEFAULT')} // => prints this is default

// 4. Switch statements are similar to if statements but have a different syntax.
// The switch statement executes different actions depending on different conditions.
// The switch statement asseses an expression. The value of the expression is compared 
// with the values of each case. If there is a match, the correlated block of code is executed.
// A default case can be designated when the expression does not match a case.
// Switch statements are a more clean and efficient way to code when your testing multiple conditions.
// We can use switch statements when we have multiple values that can require the same code or 
// when we are comparing multiple possible conditions of an expression. Switch statements use strict 
//comparisons so the case values must be the same type as the values of the expression to match.

// Example syntax:
//    switch (expression) {
//      case value1:
            //Code block executed if the result of expression matches value1.
//      break;
//      case value2:
           //Code block executed if the result of expression matches value2.
//      break;
//      default:
//      default code block }


//Example:
var fruits = "Papaya";

switch(fruits) {
  case "Banana":
    console.log("Banana is gross!");
    break;
  case "Orange":
    console.log("I like oranges.");
    break;
  case "Apple":
    console.log("Granny Smith or Gala?");
    break;
  default:
    console.log("I have never had that fruit...");
} 
//  => prints "I have never had that fruit..."









