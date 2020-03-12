// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};

//adding key value pairs to  the var _ = {}

/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value){
    return value; //just creating a function that nust return the value unchanged
};


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value){
    
    
     if (typeof value === "number"){ //if the type of the value is a number then return number 
        return "number";}
        
  else if (typeof value === "string"){ //if the type of the value is a string then return string
        return "string";}
   
    else if (Array.isArray(value)) {//if the type of the value is an array, return array
         return "array";}
  
    else if (typeof value === "undefined"){ //if the type of the value is undefined, return undefined
        return "undefined";}

    else if (typeof value === "boolean"){//if the type of the value is a boolean, return boolean
        return "boolean";}
    
    else if (value === null){//if the type of the value is null, then return null
      return "null";}
    
    else if (typeof value === "function"){//if the type of the value is a function then return function
        return "function";}
    
    else if (Object.prototype.toString.call(value) === '[object Date]'){ ////if the type of the value is a date then return date
        return "date";}

else if (typeof value === 'object'){ //if the type of the value is an object
     if (Array.isArray(value) || value === null ||  //if it is an array or null..
     Object.prototype.toString.call(value) === '[object Date]') //or a  date..
     {false} //it wont be an object
     else  {return "object"} //otherwise return object 
    }
};



/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, num){
    if (!Array.isArray(array)){ //if it isnt an array then return an empty array
        return [];
    } else if (num > array.length){ //if the numbur  is greater than the arrays length, then return the array
        return array;
    } else if (num <= 0){ //if the number is less than or equal to zero then return an emtpy array
        return [];
    }
    else if (typeof num === "undefined" || isNaN(num)){  //if the type of the number is undefined or not a number..
        return array[0]; //then return the first element of the array
        }  
    else if (num <= array.length){ //if the number is less than or equal to the arrays length then 
        return array.slice(0, num); //return the array with elements from the zero index to the number given.
    }
};





/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, num){
    if (!Array.isArray(array) || num < 0){ // if it is not an array or the number is less than zero return an empty array
        return [];
    } else if  (num === undefined || isNaN(num)){ //if the number if undefined or not a number return the last element in the array
        return array[array.length - 1];
    } else if (num > array.length){ //if the number is bigger than the arrays length, just return the array
        return array;
    }
    return array.slice(-num); //return the last elements in the array via given value
};







/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value){
    
    const callback = (element) => element === value; //if the element is equal to the value
  return array.findIndex(callback); //returning the index of the array that has the first occurance of the value
  // returns negative -1 if value is not in the array
    
    
};


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value){
    
    return array.includes(value) ? true : false; //if the array includes the given value it will return true, otherwise it returns false
    
}


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func){
   
    if(Array.isArray(collection)) { //if the collection is an array
        for(var i = 0; i < collection.length; i++) { //loop thru the array
            func(collection[i], i, collection); //apply function to each element in the array
        }
    } else {
        for (var key in collection) { //if its an object
            func(collection[key], key, collection); //apply the function to each property
        }
    }
    
    
};



/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array){
    
 let unique = [...new Set(array)]; //removing the dups from the array 

 let newarr = [array.indexOf(array)];  //using index of to find the index and created a variable assigned to it
if (newarr === -1){ //if the new array is equal to -1, 
return unique; //then return unique array
}
return unique; //returning the unique array
    
};






/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/



_.filter = function(array, func){
    let result =[];//create an array
     for(var i = 0; i < array.length; i++){ //for loop to loop thru an array
          if (func(array[i], i, array)){ //if the function has the following arguments 
                  //element, index, array
             result.push(array[i]); //then push the element into our new array
               }
         
     }
           return result; //returning final array
           
};
            
                
    


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/



_.reject = function(array, func){
    
   
      let newarr =[]; //created an array
     for(var i = 0; i < array.length; i++){ //looping thru the given array
         
          if (!_.filter(array, func) === func(array[i], i, array)){ //if it is the opposite/inverse of the filter function 
                  //element, index, array
                  func(array[i], i, array); //the call the function for each element in the array with all 3 arguments
             newarr.push(array[i]); //ppush the elements into the new array
              }
         
     }
          return newarr; //return the new array
           
};
    





/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, func){
    
    let truthy = []; //creating a truthy array
    let falsey = []; //creating a falsey array
    let botharr = []; //creating an array to hold both of the other array
    
     for(var i = 0; i < array.length; i++){ //looping thru the given array
          if (func(array[i], i, array)){ //if the function is called for element in the array with those arguments
              truthy.push(array[i]); //push the truthy elements into the truthy array
              
          }
          else {falsey.push(array[i]); //if it doesnt pass, push those falsey elements into the falsey array
          }
         
     } botharr.push(truthy); //pushing the truthy array into the both array
     botharr.push(falsey); // adding the falsey array into the both array as well
          
     return botharr ; //returning the both array contains the truthy and falsey arrays
};





/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, action){
 
 let newarr = []; //creating empty array
 


            _.each(collection, function(element, index, collection){ //using each to see if the collection is an array or object
                newarr.push(action(element, index, collection)); //saving the return value of each function call in the new array
            });
        

    
    return newarr; //then i return the new array
};
  



/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, property){
    
    let newarr = _.map(array, function(element, index, array){ 
        //creating a variable equal to the result of using map on the array
       return element[property]; //returning the property of the key.
        
    });
    
    
    return newarr; //returning the new array
    
};





/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, func){
    
    
    let answer = true //created a varibale to equal true
    
    if (func){ //if theres a function
    
    _.each(collection, function(element, index, collection){ //using each to see if the collection is an array or object
     if (func(element, index, collection) === false) { //if the array doesnt have the parameters to call the function..
         answer = false; //..then have answer become false
     } 
    
            });
        
    } else {
        _.each(collection, function(element, index, collection){
     if (!element) { //if the element is not true
         answer = false; //have answer equal false
     } 
    
            });
    }
            
        return answer; //return final answer
}




/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, func){
    
    
     let answer = false //created a varibale called answer
    
    if (func){ //if theres a function
    
    _.each(collection, function(element, index, collection){ //using each to see if its an object or array
     if (func(element, index, collection) === true) { //if function with the passing araguments is true
         answer = true; //have answer equal true
     } 
    
            });
        
    } else {
        _.each(collection, function(element, index, collection){
     if (element) { //if there is a true element..
         answer = true; //then answer is true 
     } 
    
            });
    }
            
        return answer; //return final answer
    
    
    
};




/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, func, seed){
    
    
  let previousResult = ""   //created an emtpy string variable
  
         
     for(var i = 0; i < array.length; i++) { //using for loop to iterate thru the array
        
         if ( i === 0 ){ //if the index is 0 then check for...
             
              if (seed === undefined || seed === false){ //if the seed is undefined or false..
             
                 seed = array[0]; i++; //have the seed become the zero index of the array.. continue onto next element
                  
              }
                previousResult = seed; //assign the value of seed to the previous result
         } 
                previousResult = func(previousResult, array[i], i); //assigning previous result to the value of calling the function 
                //for the passing arguemnts
        }
    
    return previousResult; //returning the final previous result
    
};

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/


_.extend = function(object){

    let args = Array.from(arguments); //created variable args that is assigned the array form of a object
    _.each(args, function(element, index, array){ //using each to go thru object and apply function to the properties 
        Object.assign(object, element); //copying all the elements(object2) and adding it to object(object1)
    });
    return object;//returning the final object
};
    
    
    
 



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
