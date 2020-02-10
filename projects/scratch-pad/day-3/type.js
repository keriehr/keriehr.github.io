// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    if (Array.isArray(value)) {return true}
    else {return false}
    
    // using array.isarray() to find out is the value is an array
    //using if else statement to make it return true if it is an array, false if it is not
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
  
    if (typeof value === 'object'){
     if (Array.isArray(value) || value === null || 
     Object.prototype.toString.call(value) === '[object Date]')
     {return false;}
    else {return true}
    }
    else {return false}
    
    /*used an if statement to check to see if the value was an array, null, or a date 
    and it would return false. then used another if statement to check the type of is object
    and if it was object it would return true*/
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
     if (Array.isArray(value) || isObject(value))
     {return true}
    else {return false}
    
    // if (typeof value === 'object'){
    //  if (value === null || 
    //  Object.prototype.toString.call(value) === '[object Date]')
    //  {return false;}
    // else {return true}
    // }
    // else {return false}
    
    /* at first i just took the previous code and erased the array part since now
    we are looking to see if the value is an array or object. but then i decided to see 
    if my previously made function isObject() would work as well. so i typed an
    if statement that is either looking for an array OR and object and to return true 
    if it was an array Or object. and false if it was otherwise.*/
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    if (typeof value == "string"){
        return "string"
    }// checking if value is a string, if it is, it returns "string"
    else if (Array.isArray(value)) {
         return "array"
     }// checking if value is an array, if it is, it returns "array"
  
    else if (typeof value === undefined){
        return "undefined";
    }// checking if value is undefined, if it is, it returns "undefined"
    
    else if (typeof value === 'number'){
        return "number";
    }// checking if value is a number, if it is, it returns "number"
    
    
    else if (typeof value === "boolean"){
        return "boolean";
    }// checking if value is of true or false value, if it is, it returns "boolean"

    
    else if (value === null)
      {return "null"}
    // checking if value is null, if it is, it returns "null"
    
    else if (typeof value === "function"){
        return "function";
    }// checking if value is a function, if it is, it returns "function"
    
    
    else if (Object.prototype.toString.call(value) === '[object Date]'){
        return "date";
    }// checking if value is a date by using object.prototype.tostring.call syntax, 
    //if it is, it returns "date"

else if (typeof value === 'object'){
     if (Array.isArray(value) || value === null || 
     Object.prototype.toString.call(value) === '[object Date]')
     {false}
     else  {return "object"}
    }
    // checking if value is an object, since arrays, null, and dates come back as false objects,
    //i check for those first, if it is none of the false objects, then it returns "object"
     
     
    
    
    
    // if (typeof value === 'object'){
    //  if (Array.isArray(value) || value === null || 
    //  Object.prototype.toString.call(value) === '[object Date]')
    //  {return false;}
    // else {return true}
    
    
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
