// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    

   var greaterThan = function(value) 
   {return value > base;}
   
   return greaterThan

   
   
  
   //Create a function expression with the argument of value that returns
  // the result of the boolean statement value > base
   //and then you return the function expression variable


   
   //func treated as whatever it returns 
   
   
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    
    var lessThan = function(value) 
   {return value < base;}
   
   return lessThan

   //basically the same code as the previous answer but we're looking for vlaue less than
   //the base
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    
    var starty = function(string) 
   {return string[0] === startsWith.toUpperCase() || string[0] === startsWith.toLowerCase();};
   
   return starty;

   // used a function expression to test each string
   //it will test the string to see if it starts with the first character whether
   //it is upper or lowercase 
   // then i returned the function since it asked to do so
   
   
   
   
   
   
   
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    var endy = function(string)
    {return string[string.length-1] === endsWith.toUpperCase() || string[string.length-1] === endsWith.toLowerCase();
    };
    
    return endy;
    
    
    //basically the same code as previous one. but here im testing for the last character
    // so i use the string.length-1 to get to the last character of a string
    //i check for the character to match whether its upper or lower case
    //then i return the function
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    
    var array = []
  
    for (var i = 0; i < strings.length; i++)
    {(array.push(modify(strings[i])))}
    
    return array 
    
    
    //string is going to be array
    //modify is a function
    //output is the modified strings
    // create an array to hold modded strings
    //used a for loop to access each string 
    
    
    
    
    
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //

  
  
    for (var i = 0; i < strings.length; i++) {
        if (test(strings[i]) == false) {return false}
        
    }
    
    return true
    
    //need to test each string so i used a for loop to go throuh each string,
    //then i tested the string
    //then i added if the test is equal to false to return false 
    // if the conditional statement does not come back false then the function will
    //return true
    
    
    
   
    
    
    
    
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}