////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(num1, num2) {   //creating a function called min, which returns the min of 2 number parameters
if (num1 < num2){ //if statement saying that if num1 is less than num2 return num1 
  return num1;
}else if (num1 > num2){   //here it says if num2 is less than num1, return num2
  return num2;
} else {return num1} // if they are equal it will just return one of the parameters



}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(num) {  //creating function called iseven that take 1 parameter
                        // returns true if its even, false if its odd
 if (num === 0) {       // using conditional statements to check if number is equal to 0
        return true;    // return true bc that is an even number
        
    } else if (num === 1) { //if its equal to 1,
        return false;       //returns  false bc that is an odd number
        
    } else if (num < 0) {   //checking for negative numbers
        return isEven(-num);  //using recursive function to return false
        
    } else {
        return isEven(num - 2); //using recursive function to return true
    }

}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, letter) {
  
  var count = 0;

for (var i = 0; i < string.length; i++){    //using for loop to check each character in the string
  if (string.charAt(i) === letter){       //checking if the parameter letter is equal to any characters in the string
        count++;                    //if it is, it will count them
    }
    
  
} return count; //then it will return the total count
  

}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {


var count = 0;

for (var i = 0; i < string.length; i++){  //need for loop to look at each letter
  if (string.charAt(i) === "B"){      //if any of the characters in the string are equal to b,
        count++;              // it will count how many b's there are
    }
    
  
} return count;   // and then it will return the count
}



















////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
