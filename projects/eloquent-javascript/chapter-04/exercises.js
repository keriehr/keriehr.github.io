////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step = start <= end ? 1 : -1) {



let result = []; //created result array

if (start === end){ return result} // if the start and end values are the same, return an empty array
  
  // for loop, loops up for positive step values
  // and loops down for negative step values
  for (let i = start; step >= 0 ? i <= end : i >= end; i+=step) {
    result.push(i); //adds the indexes into result array
  }
  return result; //returns the array result




}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(numbers) {
  
 var result = 0;  //created result variable
  for (let num of numbers) { //using for of loop to go thru array of numbers
    result += num; //assigning the sum of nums to result
  }
  return result; //returning the result of sum
 

}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {

  
  //array so use for loop
var newArray = [];
  //newArray 
   for (var i = array.length-1; i >= 0; i--) { //looping through array backwards
    newArray.push(array[i]); //pushing into the newarray
     
   }
  return newArray; //returns new array
}
////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  
  
  for (var i=1; i<array.length; i++){ //for loop bc looping through array
    var x = array[i]; //index of array is equal to our variable x
    array.splice(i,1); // splice off at "i" index, one item of the array
    array.unshift(x); // using unshift to add the value back to the beginning of the array
  }
  return array; //and then return the array
}
  
  
  
  



////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  
    var list = null; // if the array is empty it will be returned
    for (var i=array.length-1; i>=0; i--)  // looping through array backwards
        list = {value: array[i], rest:list}; //converts array to a list 
           //taking the old value and overwriting it with a new value that references the old value.
        
    return list;//returing the list
}
  
  
  



////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {

var array = []; //creating array
for (let node = list; node; node = node.rest) { //using syntax eqjs suggested
  array.push(node.value); //pushing node value into the  array
}
return array; //returning the array
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {  //takes element and a list as arguments
  
  var node = listToArray(list);  //using previous function 
  node.unshift(element); //adding element to the beginning of the variable node
   node = arrayToList(node);  //using previous function to make variable node = a new list
  return node; // returning the new list 
  
  //instructions //creates a new list that adds the element to the front of the input list
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, number) {
  
  
   for ( var node = list; node; node = node.rest ) { //for loop, 
  	var element = listToArray(node); //variable element is equal to the list to array node
    return element[number];  //returning the element at give position in the list
}
  
}



////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
  
  
   if (x === y) {   // if x is strictly equal to y, return true
    return true;
  }
  else if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
    // if the type of x is an object (and not null) AND the type of y is an object (and not null) then go on to check...
    if (Object.keys(x).length != Object.keys(y).length)  // if the length of value of x is not equal to y's value length then...
      return false; // return false

    for (var prop in x) { //for in loop to loop thru object 
      if (y.hasOwnProperty(prop))  //checking for specified property
      {  
        if (! deepEqual(x[prop], y[prop])) // checking to see if their not equal 
          return false; //return false
      }
      else
        return false; //return false
    }

    return true; //return true 
  }
  else 
    return false; //return false
  
  
  

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
