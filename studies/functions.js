/*
*
* FUNCTIONS
*
*  Functions are reusable blocks of code made to perform a specific task.
*  There are two phases to using functions: Declaring and Invoking.
*
*/


// 1. Declaration //
// A Function Declaration establishes a named function. To create a function declaration, 
// you use the function keyword followed by what you want to name the function. Then followed by 
// parameters and function body and/or return statement. Functions do not have to have an output or a parameter.

// Syntax:
//    function name(parameter1, parameter2) {
//       function body/ return statement }

// Example of declaring the function:

function multiply(a, b) { 
 return a * b;    // this function returns the product of a and b
}



// 2. Invoking  (Executing) //
// We have to invoke or call a function in order for the function to run.
// To call a function we must use its name and its arguments.

// Example of invoking the function
multiply(5, 2); // => returns 10  




// We can assign a function to a variable which is called a function expression.

// Example of a function expression:
 let add = function(num1, num2){
     return num1 + num2;
 }; 

add(2, 3); // =>  returns 5


// 3. Scopes //
// Scopes determine what we have access to.
// There are global scopes and local (function) scopes.  Inside local scopes there can be block statements (if/else block and loop block).
// The children(inner) scopes can access their parents(outer) scopes but not vice versa.

//Example of c being a local variable. The function can access the variable inside of it. It can only be used inside the function 
//where it is defined. It is hidden from other functions.
function timesTwo() {
  let c = 2;
  return c * c;
} // => returns 4


// Here is an example of d being a global variable. The function can access the variable that is defined outside of the function body.
 var d = 3;
function timesThree() {
  return d * d;
} // => returns 9




// 4. Closures // 
// Closures are basically a function within a function. (funcCEPtion)
// It is a function with access to the parent scope (outer function) from the inner scope (inner function).
// These inner functions (child scope) can use variables from the outer function (parent scope).
// The parent scope does not have access to the variables inside the child scope.

//Example:
function funcyName() {
  var name = 'Keri';
  function showName() {
    console.log(name);
  }
  return showName();
}

funcyName(); // => prints Keri





