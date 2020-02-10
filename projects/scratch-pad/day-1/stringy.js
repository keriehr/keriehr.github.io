// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    
return string.length;

// returning bc its asking for a return so i started with "return". i'm finding the strings length so 
// i used the .length code and thats why i wrote string.length


    // YOUR CODE ABOVE HERE //
} 

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //

return string.toLowerCase();

// asked for return so i started with return. wanted the string lowercase
// so i wrote the above syntax to force the string to lowercase

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    

return string.toUpperCase(); 

//asking to return a new string so i started with "return". it is forced
//to upper case so i used the .toUpperCase code. the directions want the string to be uppercased so i 
// put string.toUpperCase

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    
return string.split(" ").join("-").toLowerCase();
// start with return bc the directions are asking for a retun. 
//the string is forced so dash case so we split the string first and add spaces .split(" ") 
//the we join the string together with dashes .join("-")
// and then use the .toLowerCase() code to enforce lower case

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //

if (string[0] === char.toUpperCase() || string[0] === char.toLowerCase()) 
    {return true;
    
} else {
    return false;
    
}
/*had to write a conditional statement that would return true if the char matched the first
letter of the string, whether it was lower or upper case. then i had to return it as false if the char
didn't match the first letter of the string. */

   

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //



if (string[string.length-1] === char.toUpperCase() || string[string.length-1] === char.toLowerCase()) 
    {return true;}
     
     else {return false;}
/* it wants a return of true if the strings last index is equal to the char, whether its lower or 
upper case . so i start with a conditional statement saying that if the last index on the string is
equal to the char uppercase  OR the last index  of the string is equal to char lowercase then it will
return true.
otherwise if the char does not match the last index of the string it will return false */




    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

 return stringOne + stringTwo;

// just concatenating to strings together using + operator.
//wrote return so it will actually return the strings once concatenated.

    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);

   return args.join("");
//wrote return so it will actually bring back the array onced its joined.
//args is an array that stores the arguments.
//args.join("") acutally concatenates the strings(or arguments) together.



    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

  if (stringOne.length > stringTwo.length )
  {return stringOne;}
  else (stringTwo.length > stringOne.length)
  {return stringTwo;}
  
  // its asking to return the longest of the two strings. in order to find that you have to use 
  // the .length code.  stringone.length will give the length of string one. stringtwo.length will
  // you the length of stringtwo. then we must compare them by writing a conditional statment 
  // if stringone's length is longer(greater than) then stringtwo's length, it will return stringone.
  // if stringtwo's length is longer(greater than) than stringone's length, it will return stringtwo.
  
 

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    
if (stringOne < stringTwo)
{return 1;}

else if (stringOne > stringTwo)
{return -1;}

else (stringOne == stringTwo)
{return 0;}

/* here we are comparing strings by writing a conditional statment. 
if stringOne is less than stringTwo, it will return 1; bc that is what the directions ask for.
if stringOne is greater than stringTwo, it will return -1.
and if both strings are equal, it will return 0. we write it this way bc it is in ascending order

*/

    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

if (stringOne > stringTwo)
{return 1;}

else if (stringTwo > stringOne)
{return -1;}

else (stringOne == stringTwo)
{return 0;}

/* here are comparing strings in descending order via conditional statements.
if stringone is greater than stringtwo, it will return 1
if stringtwo is greater than stringone, it will return -1
if the strings are equal, it will return 0.

*/



    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
