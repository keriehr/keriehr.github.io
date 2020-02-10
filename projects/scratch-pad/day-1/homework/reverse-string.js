// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    
    var newString = "";
    for (var i = input.length - 1; i >= 0; i--) {
        newString += input[i];
    }
    return newString;

    // declaring a newstring bc it will equal the string in the parameters reversed.
   /* using a for loop to start at the end of the index of th string by writing input.length -1.
   then stating that it will stop at the zero index. then it will reverse by one index each time. 
   the new string will equal the reversed string created by our for loop.
   then will return the new string when the function is called.
 
   
   */
    
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}