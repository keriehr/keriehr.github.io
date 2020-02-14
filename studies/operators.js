/*
*
* OPERATORS: 
*
*   Operators perform a sort of operation on values that produces a result.
*   Operators are classified by what they do and how many operands they use to perform that action.
*   Operands are the values in which the operators act upon. JavaScript has unary operators, binary operators, 
*   and only one ternary operator. 
*   Unary uses one operand.         syntax=>  operand  operator     or    operator  operand
*   Binary uses two operands.       syntax=>  operand  operator  operand            
*   Ternary uses three operands.    syntaxt=> conditional operand  ?  operand : operand 
*
*/



// 1. Arithmetic Operators //
// Arithmetic operators are used to perform arithmetic actions on numbers.

// These are the arithmetic operators.
// +	Addition     AND     The + operator can also be used to add (concatenate) strings.
// -	Subtraction
// *	Multiplication
// **	Exponentiation 
// /	Division
// %	Division Remainder
// ++	Increment
// --	Decrement

//Example of Addition Operator
// when adding:
var c = 3;
var b = 2;
var a = b + c;
console.log(a); // prints => 5

//when concatanating:
var str1 = "Hey";
var str2 = "Y'all";
var str3 = str1 + " " + str2;
console.log(str3); // => prints "Hey Y'all"



// 2. Assignment Operators //
// Assignment operators assign values to our variables.

// These are Assignment Operators
//   =   	a = b   	a = b

//  +=   	a += b  	a = a + b

//  -=	    a -= b  	a = a - b

//  *=	    a *= b  	a = a * b

//  /=	    a /= b  	a = a / b

//  %=	    a %= b  	a = a % b

//  **=	    a **= b 	a = a ** b

// The addition assignment operator (+=) adds and assigns a value to our variable.
// Example:
var x = 5;
console.log(x); // => prints 5
x += 1;
console.log(x); // => prints 6


// 3. Comparison Operators //
// Comparison Operators compare two operands and return a Boolean value of true or false.

// These are Comparison Operators:
//    ==	equal to
//   ===	equal value and equal type
//    !=	not equal
//   !==	not equal value or not equal type
//     >	greater than
//     <	less than
//    >=	greater than or equal to
//    <=	less than or equal to
//     ?	ternary operator

// Comparison Operator Examples:
var y = 3;
var z = "hello";

console.log(y === z); //prints false because 3 is not equal to hello
console.log(y !== z) ;//prints true  because they are not equal



// 4. Logical Operators //
//  Logical Operators are used to determine the differences and the equalities between variables and/or values.
//  They are used to test for True or False.

// Below are the Logical Operators:
// &&	logical and     => means x and y have to both be true to get the result of true 
// ||	logical or      => means x or y can be true to get the result of true
// !	logical not     => means x and y have to be false to get the result of true

// Logical Operator Examples:
var num1 = 5, num2 = 10;

(num1 != num2) && (num1 < num2); // returns true

(num1 > num2) || (num1 == num2); // returns false

(num1 < num2) || (num1 == num2); // returns true

!(num1 < num2); // returns false

!(num1 > num2); // returns true



// 5. Unary Operators //
// A unary operation is an operation that uses only one operand.
//  Syntax=>   operand  operator      or      operator  operand
// Example of one the unary operators:
var i = 1;
i++;
console.log(i); // => prints 2

// 6. Ternary Operator//
// The Ternary Operator is the only operator that takes three operands.
// Syntax =>    <condition> ? <value1> : <value2>;
// The Ternary Operator starts with a  conditional statement followed by ? operator. 
// The second part (value1) will be executed if condition is true. 
// If condition is false then third part (value2) will be executed.
// This operator tends to be used as a shortcut for if statements.

var age = 19;
var canDrinkAlcohol = age > 20 ? 'yes' : 'no';
console.log(canDrinkAlcohol); // => prints no
