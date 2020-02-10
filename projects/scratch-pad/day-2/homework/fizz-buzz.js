// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //

var num = i
// declaring num is i

  for ( var i = 1; i <= 100; i++) {
  // here i used for loop bc we have a starting point of 1 and a stopping point of 100
  //and we will increase by 1
  if ( i%5 === 0 && i%3 === 0 )
  {console.log("FizzBuzz");}
 //if it is a multiple of 5 AND 3 the console will print fizzbuzz
  else if ( i%3 === 0 ) 
  {console.log("Fizz");}
  //then we need to state that if it is just a multiple of 3 then the console will print fizz
  else if ( i%5 === 0 ) 
  {console.log("Buzz");}
  //but if it is only a multiple of 5, the console will print buzz
  else
  {console.log(i);}
  //if it is none of the choices above then here i have the console just printing the number
  
}
  
  
  



    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}