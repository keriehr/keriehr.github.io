/*
*
* STRING MANIPULATION: 
*
*    0. String Manipulation is literally the manipulation of strings.
*    There are Operators and String Methods that help you access and work with strings.
*           
*
*/

// 1. Using Operators (+)
// The + sign is not only for addition but also for concatanation.
// Concatanating strings is when you combine two or more strings together.
// Example:
var str1 = "Hey";
var str2 = "Y'all";
var str3 = str1 + " " + str2;
console.log(str3); // => prints "Hey Y'all"


// 2. Using Methods ()
//  Because strings are primitive, developers had to add in some methods that we can use to 
// manipulate or view specific things in our data. Methods are kind of like keywords.

// Examples: 
// var x = "hello"  
// x.length => will return the length of the string "hello"

// You can also concatenate two or more strings by using the concat() method:

var firstName = 'Keri';
var fullName = firstName.concat(' ','Ehrhart');
console.log(fullName); //  => prints "Keri Ehrhart"
console.log(firstName); // => prints "Keri"

