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
// The += is to concat and assign value at the same time.
// .length will find the length of a string.
// Examples:
var str1 = "Hey";
var str2 = "Y'all";
var str3 = str1 + " " + str2;
console.log(str3); // => prints "Hey Y'all"


 var str4 = "Oh ";
 str4 += str1;
 console.log(str4); // => prints "Oh hey"


let x = "hello"; 
 x.length;  // => returns 5
 
//you case also compare strings

console.log("1" == 1); //prints true because of the non strict operator
console.log("1" === "1"); //prints true 
console.log("1" === 1); //prints false because the strictly equals operator sees that a string and a number are not strictly the same




// 2. Using Methods ()
//  Because strings are primitive, developers had to add in some methods that we can use to 
// manipulate or view specific things in our data. Methods are kind of like keywords.

// Examples: 
// You can concatenate two or more strings by using the concat() method:

var firstName = 'Keri';
var fullName = firstName.concat(' ','Ehrhart');
console.log(fullName); //  => prints "Keri Ehrhart"
console.log(firstName); // => prints "Keri"


// We can change the letters from uppercase to lowercase and vice versa with .toUpperCase() and .toLowerCase() methods.


console.log(fullName.toUpperCase()); // => prints KERI EHRHART

console.log(fullName.toLowerCase()); // => prints keri ehrhart


// We can use slice() to get back a certain part of a string. slice(start, end) takes two parameters: where you want 
//it to start taking and where you want it to end. The end parameter is optional.

fullName.slice(8); // => returns hart


// We can use .split() to turn our string into an array of a string.

fullName.split(); // => returns ["Keri Ehrhart"]


// We can use .charAt to return a character at the specified index position.

fullName.charAt(5); // => returns "E"


// We can use the includes() method to see of our string contains a specified character or word.

fullName.includes("potato"); // => returns false
fullName.includes("i"); // => returns true


