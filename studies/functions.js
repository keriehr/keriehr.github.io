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
// parameters and function body and/or return statement.

// Syntax:
//    function name(parameter1, parameter2) {
//       function body/ return statement }

// Example:
//function multiply(a, b) {
//  return a * b;    // this function returns the product of a and b
// }

// 2. Invoking  (Executing) //
// We have to invoke or call a function in order for the function to run.
// To call a function we must use its name and its arguments.

// Syntax:
//    name(arguement1, arguement2)
// Parameters are just the placeholders for the arguements that will be used when the function is invoked.

//Example of invoking the function multiply:
// multiply (2, 3)   // => returns 6

// Example of assigning a function to a variable:
// var a = myFunction(); 

// 3. Scopes //
// Scopes determine what we have access to.
// There are global scopes and local (function) scopes.  Inside local scopes there can be block statements (if/else block and loop block).
// The children(inner) scopes can access their parents(outer) scopes but not vice versa.

// 4. Closures // 
// Closures are basically a function within a function. (funcCEPtion)
// It is a function with access to the parent scope (outer function) even after the parent is closed.
// These inner functions (child scope) can use variables from the parent scope.
// The parent scope does not have access to the variables inside the child scope

