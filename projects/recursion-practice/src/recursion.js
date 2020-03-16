// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  
  if (n < 0)  //if the number is less than 0 aka negative number..
        return null; //then return null
  else if (n == 0)  // if it is equal to 0 aka positive number..
      return 1; //then return 1
  else {
      return (n * factorial(n - 1));
      //return the number times the (number - 1)
      //the factorial function part will keep iterating till it hits 1
  }


  
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  
  
  //shorter version
 // var sum = (array) => (array.length === 0) ? 0 : array[0] + sum(array.slice(1));

  
  if (array.length === 0){ //if the array is empty then return 0
    return 0;
  }
  
  if (array.length == 1) {  //if the array has just one element ..
    return array[0]; //then return the first index of the array
  }
  else { //if it has more elements, then add them together 
    return array[0] + sum(array.slice(1)); 
     //adding the first index of the array to the next element of the array, 
     //slicing off the first index each time. using recursive sum to keep iterating.
     //returning the total sum
  }
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  
    var sum = 0; 
  for(var i = 0; i < array.length; i++) { //using loop to loop through the array
    var value = array[i]; //adding the elements of the array to the variable value
    if(Array.isArray(value)){ 
      // if value is an array.. 
    sum += arraySum(value); //our variable sum will then equal a sum of elements in the value array
    } else {
      //if it is not an array.. 
      // then add the single number to our sum variable.
       sum += value;
    }
  }
  return sum; //returning the sum
  
};

// 4. Check if a number is even.
var isEven = function(n) {
  //BASE CASE
  
   if (n === 1 || n === -1){ //if it is equal to 1 or -1 the number will not be even
    return false;
  }  
  else if (n === 0){ //if it is equal to zero, that is an even number
    return true;
  }  
  else if (n < 0){ // running the recur. case if it is negative
    return isEven(-n); 
  }
  else {return isEven(n-2);} //running recur. case if the number is positive
  
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  // Stop recursing when the end value is reached
  if(n === 1 || n === 0 || n === -1){ //if the number is only 1, -1, or 0 return zero
    return 0;}
  
  // recursive case
  else if (n < 0){ //if the number is less than zero, we're counting back up to zero and adding
    return n + 1 + sumBelow(n + 1);
  }
  else {return n - 1 + sumBelow(n - 1);}  //otherwise we will just count down to zero and add all the numbers
};




// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {

// BASE CASE
if (x === y || (x + 1) === y || (x - 1) === y){ //returning an empty array  if the numbers are the same or one number different
return [];
}


if (y - x === 2)  //if y - x is 2, we will return x + 1
  {
    return [x + 1];
  } 
  
  // recurse case
  
  else if (x > y){ //if x is bigger than y then we increment 1 of y and push it into our variable reverse and return it
    var reverse = range(x, y + 1);
    reverse.push(y + 1);
    return reverse;
  }
  
  else {
  
    var list = range(x, y - 1); //otherwise decrement 1 of y and push it into our variable list, and reutrn list
    list.push(y - 1);
    return list;
  }  
  
  
  
};




// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  
   if (exp === 0) { //if the exponent is zero then reuturn 1
        return 1;
     
   }
     else if (exp < 0){ //if its negative number, add 1 to the exponent and return it
      return  exponent(base, exp + 1) / base;
      
     }
        
     else {
        return base * exponent(base, exp - 1); //otherwise minus 1 to the exponent and return it
    }
  
  
}; 

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  
     //base case
    if (n < 1) { //if number is less than 1 return false
        return false;
    } else if (n === 1 || n === -1) { //if equal to 1 or -1 return true
        return true;
    } else {
      //recur. case
       return powerOfTwo(n / 2); //divide num by 2 till we make it to a base case
    }
}; 

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  //if there is 1 character or its empty, we will return the string
  if (string.length <= 1) return string;
  
  //using recursion to add the first letter of the string to the back of the string.
return reverse(string.substr(1)) + string.charAt(0);
  
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  
  var original = string.replace(/[\s""]/g,"").toLowerCase();
//getting rid of whitespace and, uppercase letters
  
  
   if (string.length <= 1) {
    return true; //if the string is 1 character or empty, return true
  }
  let [ firstLetter ] = original;  //our new string equals variable firstletter
  let lastLetter = original[original.length - 1]; //our last letter equals last letter in the string

  if (firstLetter === lastLetter) { //if the first letter is equal to the last letter
    let stringNoFirstAndLastLetters = original.substring(1, original.length - 1); //varaible is equal to our new string 
    //without the first and last character
    return palindrome(stringNoFirstAndLastLetters); //using recursion to keep checking the string
  } else {
    return false; //else return false
  }
  
};




// DONT DO 11
// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
}; // DO NOT DO MODULO DO NOT DO DO NOT DO DONT DO DONT DO DONT DO DONT DO DONT DO





// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
  
  if (x === 0 || y === 0) {
        return 0;
    }
  else if( y < 0 ) {  
    return - x + multiply(x, y + 1);  
}

else {
    return x + multiply(x, y - 1);  
}
  
};

 // if either number is equal to zero return zero
 //if the number is negative //return the negative total
//otherwise add up the postive total


//DONT DO 13
// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) { 
}; //DONT DODONT DO DONT DO DONT DO DONT DO DONT DO DONT 


//DONT DO 14
// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};// DONT DO DONT DO DONT DO DONT DO DONT DO









// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  
   if (str1.length === 0 && str2.length === 0) {
            return true;
        } //if both are empty return true
    
     else  if (str1[0] !== str2[0]) {
        return false; //if the first characters do not match return false
    }
    
   else if (str1[0] === str2[0]) { // if the first characters do match..
        return compareStr(str1.slice(1), str2.slice(1));
    } // use recursion to keep iterating till we hit a base case,  slice off first charcter of each string.
    
  
  
};





// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  
  //base case
  if (str.length === 0){  //if its an empty string then return an empty array
    return [];
  }
  let array = createArray(str.slice(1)); //recur. case //remove first letter of  string till base case
  
   array.unshift(str[0]); //add each letter into the array
   
   return array; //return the array
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  
  //base case
  if (array.length === 0){  //if nothing is in the array, return an empty array
    return [];
  }
   
//recur. case // first array with the last element of the array being concatted with the recursive function taking the array and
//slicing off the last element in the array
  return [array[array.length-1]].concat(reverseArr(array.slice(0, array.length-1)));
  
  
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  
  //base case
  if (length === 0){ //if the given length is 0 then return an empty array
    return [];
  }
  //recur. case //putting the value into an array and concatting that array to recurs. which is the value and subtracts the length
  //until it reaches the base case
  return [value].concat(buildList(value, length - 1));
  
  
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  
  //base case
  if (!array.length){ //if no length return 0
    return 0;
  }
  //returning recurs. case // the first element equal to the value plus the recurs. removing the first element of the array 
  //till it reaches the base case and then counts value back up the stack
  return (array[0] === value) + countOccurrence(array.slice(1), value);
  
  
  
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  
  if (array.length === 0){ //base case //if theres nothing in the array, return an empty array
    return [];
    
  } //recurse case//  using callback func on first element in array and concatting with recurse array without the first element
  return [callback(array[0])].concat(rMap(array.slice(1), callback));
  
};


// DONT DO 21 THRU 24
// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
}; // DONT DO

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
}; //DONT DO

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};// DONT DO


//DONT DO 21 THRU 24
// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};// DONT DO

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
   if (n === 1) return 1; //if equal to 1 then return 1
   if (n < 0) return null; //if less than zero return null

  return nthFibo(n - 1) + nthFibo(n - 2); //returning  recurse. num - 1 plus the number - 2
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  
  
    let result = []; //creating an array
    
    if(input.length === 0) { //base case //if there is no input then return result array
        return result;
    }
    result.push(input[0].toUpperCase()); //pushing the zero index of input as upper case into the result array
    result = result.concat(capitalizeWords(input.slice(1))); //then concatting that to recurse of the input without the first element and assinging all this to result
    return result; //returing the final result array
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  
    let result = []; //creating a result array
    if(!array.length) {  //base case //if there is nothing in the array, return the empty array
      return result; 
      
    }
    //pushing into the result array //capitalizing the first letter in the first index and adding the rest of the word to it
    result.push(array[0].charAt(0).toUpperCase() + array[0].slice(1));
    result = result.concat(capitalizeFirst(array.slice(1))); //assigning the result array to : the result array concatting..
    //to the recurse case of the array without the first element until it reaches the base and goes back up the call stack
    return result; //returning final result
};


//DONT DO 28
// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};// DONT DO DONT DO DONT DO DONT DO


//DONT DO 29
// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};// DONT DO DONT DO DONT DO

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
 //creating result variable // is a iterable object  or  empty object
  let result = Array.from(arguments)[1] || {};
    if(str.length === 0) { //if the string is not there, return the result
        return result;
    }
    if(!result[str[0]]) {  //if falsey then have the zero index of string equal one
        result[str[0]] = 1;
    } else
     {
       
        result[str[0]]++; //else just increment by 1
    }
    return letterTally(str.slice(1), result); //return recurse. the string without the zero index and the result
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  
  //if zero index is equal to the first index 
   return (list[0] === list[1]) ? compress(list.slice(1)) //then do this first part, recurse the array without the first element
                             : [list[0]].concat((list.length == 1) //otherwise go to this //first array has the zero index of..
                             //list concatted to the list length if its equal to 1 ..
                             ? [] //then you get an empty array..
                             : compress(list.slice(1))); //otherwise we use the recurse case again 
};


// DONT DO 32
// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
}; // DO NOT DO DONT DO DONT DO DONT DO

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  
  //base case, if arrays length is equal to zero then return the array
   if (array.length === 0) { 
    
     return array ;
     
   }
     //if these are equal to zeros then..
    if (minimizeZeroes(array.slice(1))[0] === 0 && array[0] === 0) {
        return minimizeZeroes(array.slice(1)); //return recurse, array without the first element
    } else { //otherwise return the first element of the array concatted to the array without the first element
        return [array[0]].concat(minimizeZeroes(array.slice(1)));
    }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {

  // 3 base cases// 
   if (array.length === 0) { //if an empty array, return the array
     return array; 
     
   }
    if(array[0] < 0) {  //if first element in array is less than zero..
      array[0] = -array[0];  // make it positive
      
    }
    if(array[1] > 0) {  //if the second element is great than zero..
      array[1] = -array[1]; //..make it negative.
      
    } //return recurse case // an array with the arrays first 2 elements concatted to recurse array without the first 2 elements
    return [array[0], array[1]].concat(alternateSign(array.slice(2)));
  
  
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  let numObj = {0:'zero', //creating an object to give each number key a value of its word form
                1:'one',
                2:'two',
                3:'three',
                4:'four',
                5:'five',
                6:'six',
                7:'seven',
                8:'eight',
                9:'nine',};
  
  if(numObj[str[0]]) { // if first index of string is a key in  numobj then..
    return numObj[str[0]].concat((str.length===1) //   return //concatting first array to second, if strings lenght is equal to 1
                                        ? '' //its an empty string 
                                        : numToText(str.slice(1))); // otherwise do recurse and take first letter off string 
  }
  
  return str[0].concat((str.length===1) //else if string lenght is equal to 1
                          ? '' //if true, then empty string
                          : numToText(str.slice(1))); //if false do recurse and take first letter off string till you hit base case 
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
  
  // if((max-min==0) && (target !== array[min])) return "Error: value is not in the array";
  
  if(min==undefined) min = 0;
  if(max==undefined) max = array.length-1;

  let midpoint = Math.floor((min+max)/2);
  
  if(array[midpoint] == target) return midpoint;
  
  
  return (target < array[midpoint]) ? binarySearch(array,target,min,midpoint-1) 
                                    : binarySearch(array,target,midpoint+1,max);
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
