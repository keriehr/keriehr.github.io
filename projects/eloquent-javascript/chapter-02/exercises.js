


//find parameters / what you need inside the spec folder / inputs for the function



////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(number) {
  var numOfRows = number;  //the parameter 'number'  will dictate how many rows there will be
  var output = "#"; //they are asking for the output to be rows of #
for (var i = 1; i <= numOfRows; i++) {
  console.log(output);   //  using a for loop to go through each number
    output += "#"; //we want a # added each time we go through each number 
   
  }
  
  //output = "#"; 
}

triangles(7); //calling the function






////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start, end) {
  
  //print 1 to 15 // fizz for every 3 // buzz for every 5// fizzbuzz for both
  
  
  for ( var i = start; i <= end; i++) {
  // i used for loop since we are going through each number 
  if ( i%5 === 0 && i%3 === 0 )
  {console.log("fizzbuzz");}
 //if it is a multiple of 5 and 3, it will print fizzbuzz
  else if ( i%3 === 0 ) 
  {console.log("fizz");}
  //then we need to say that if it is just a multiple of 3 then it will print fizz
  else if ( i%5 === 0 ) 
  {console.log("buzz");}
  //but if it is only a multiple of 5, it will print buzz
  else
  {console.log(i);}
  //if it is none of the above then it will just print the number.
  
}
  
  
  
  
  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(number) {



                    
var board = "";    //make a variable that is a empty string, im going to add the spaces and # to it

for (var i = 0; i < number; i++) {   //using for loop to create a row
  for (var x = 0; x < number; x++) {//using another for loop inside the first loop(nested loop) to create a collection 
  
    if ((x + i) % 2 == 0) // seeing if it is divisible by 2
      board += " ";  //adding space in even spot
    else              
      board += "#"; //adding space in odd spot
  }
  board += "\n"; //line break
}

console.log(board);

/* review from class

var board = " "

for (var row = 0; row < number; row++){
  for (var column = 0; column < number; column++){
    if ((row + column) % 2 == 0){
      board += " ";
    } else {
      board += "#";
    }
    
  } board += "\n";
  
} console.log(board);

      for loop to create the row
      nested for loop to create col
      conditional testing row + col % 2 ===0
      add space to the board
      else, add a # to the board
      when we finish the row, add a line break, \n
      print the board


*/

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
