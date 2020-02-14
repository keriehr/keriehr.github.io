/*
*
* LOOPS: 
*
*    0. Loops can iterate a block of code as many times as we want.
*       They are useful when you want to run the same code a number of times, but with different values.        
*       There for 3 main  loops that we use: For, For-In, and While.
*/


// 1. For Loop //
// We use these when we are looping over strings and arrays.
// Syntax: for (declare starting conditon; set stopping condition; increment amount){code block to run}
// Example:    
//      for (var i = 0; i < 5; i++){
//      console.log("Hello!")} => prints "Hello!" 5 times

// 2. For In Loop //
// We use these when we are looping over objects
// Syntax: for (var key in object) {code block to run}
// Example:
//         for(var key in object){
//          console.log(key);        => prints the objects key
//          console.log(object[key])  => prints the objects value

// 3. While Loops //
// Loops while something is true. 
// Syntax: while (i < stopping condition){ condition/code block}
//Example:
//      var count = 0;
//      while(count < 5){
//          count++;
//      console.log(count)}    => prints 1 2 3 4 5 
//      

//LOOPS can count backwards 
//      for(var i = 10 ; i > 0; i--){
//       console.log(i)}    => prints 10 9 8 7 6 5 4 3 2 1

// LOOPING OVER AN ARRAY 
//       var arr = [];
//     for(var i = 0; i <= 5; i++){
//       arr.push(i);}
// 
//       console.log(arr)  => prints [0,1,2,3,4,5]