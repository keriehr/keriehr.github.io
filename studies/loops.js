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
// To prevent an infinite loop, your start point (0) should be less than your end point (5) and you increment (i++) up to 
//the end point and thats where the loops stops.
// In the reverse version, your start point (10) is going to be bigger than your end point (0), and you decrement down (i--) to stop at the end point.
//Example:    
     for (let i = 0; i < 5; i++){
     console.log("Hello!")} //=> prints "Hello!" 5 times

//For loop, Reversed
     for(let i = 10 ; i > 0; i--){
      console.log(i)}   // => prints 10 9 8 7 6 5 4 3 2 1


// 2. For In Loop //
// We use these when we are looping over objects
// Syntax: for (var key in object) {code block to run}
//Example:

var object = {
    key1: 1,
    key2: 2
};

        for(var key in object){
         console.log(key);       // => prints the objects keys, key1, key2
         console.log(object[key])} // => prints the objects values, 1, 2

// 3. While Loops //
// Loops while something is true. 
// Syntax: while (i < stopping condition){ condition/code block}
// To prevent an infinite while loop, you have at least one condiiton within the loop that will 
// change the value of the variable its being compared to (5 is our end point). 


//Example:
     let count = 0;
     while(count < 5){
         count++;
     console.log(count)}   // => prints 1 2 3 4 5 
     



//LOOPING OVER AN ARRAY 
      let arr = [];
    for(let i = 0; i <= 5; i++){
      arr.push(i);}

      console.log(arr); // => prints [0,1,2,3,4,5]
      
      
      
      
      