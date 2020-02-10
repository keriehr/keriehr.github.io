// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  for (var i = 0; i < array.length; i++)
  {console.log(array[i])}
  
  
  // use a for loop since we have an array we need to loop 
  // we start at the beginning of the loop using 0 index 
  //we stop at the end of the array using .length and we increase by 1 using ++
  //then we print the values via console.log
  
  
  // YOUR CODE ABOVE HERE //
}


/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
   for (var i = array.length-1; i >= 0; i--)
  {console.log(array[i])}
  
  
  // YOUR CODE ABOVE HERE //
}

// created a storage array to hold values
//to get access to each value using s for in loop 
//push each value to our array
// we also have to reverse print the values since it asks us


/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
 

    var array = []
    for (var key in object) {array.push(key)};

   return array  
  
  // YOUR CODE ABOVE HERE //
}

// created a storage array to hold keys
//to get access to each key using a for in loop 
//push each key to our array
// and then we return the array
  




/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  for (var key in object) { console.log(key)};
  
  
  // YOUR CODE ABOVE HERE //
}

// we use for in loops for objects
//and use the console.log code to print the keys






/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  var array = []
    for (var key in object) {array.push(object[key])};

   return array
  
  
  // YOUR CODE ABOVE HERE //
}


// created a storage array to hold values
//to get access to each value using a for in loop 
//push each value to our array
// then we return the array since is asks for it to be returned.


/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  for (var key in object) {console.log(object[key])} ;
  
  
  // YOUR CODE ABOVE HERE //
}


// looping over an object so we use the for in loop
//to print we use console.log and to get to the value we type object[key]





/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  
  var num = 0
   for (var key in object) {num++}
   
   return num
   


  
  // YOUR CODE ABOVE HERE //
}

// using a for in loop for the object. created a variable num. use ++ to count.
//then return the length via num.







/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
 
  var array = [];
  for (var key in object) {array.push(object[key]);}
  for (var i=array.length-1; i>=0; i--)   {console.log(array[i])};
  
  
  
  // create a storage array to hold values
//to get access to each value using a for in loop 
//push each value to our array
// we also have to reverse print the values since it asks us to do so
  
  
  // YOUR CODE ABOVE HERE //
}




// END END END END END END END END END


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
