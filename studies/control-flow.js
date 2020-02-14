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

// 4. Switch statements are not important enough for me to mention just yet.