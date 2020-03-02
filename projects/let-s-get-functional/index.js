// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-keriehr");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
 return _.filter(array, function(customerObj){
    return customerObj.gender === "male"; //brings back array property
}).length; //returning the number
};





var femaleCount= function(array) { //output is a number



return _.reduce(array, function(n, val) {
    return n + (val.gender === "female");
}, 0);
 
}

//  return _.reduce(array, function(n, customerObj){
//     return n + (customerObj.gender === "female"); 

// };

var oldestCustomer = function(array){ //output is string

let highestAge = 0;
return _.reduce(array, function(prev, curr){
  if(curr.age > highestAge) {
    highestAge = curr.age;
    return curr.name;
  }
return prev;
}, 0);
 
};

var youngestCustomer = function(array){ //output is string

let youngAge = Infinity;
return _.reduce(array, function(prev, curr){
  if(curr.age < youngAge) {
    youngAge = curr.age;
    return curr.name;
  }
return prev;
}, 0);
 
};



var averageBalance = function(array){ // output is a number
 
//var balance = _.pluck(array, balance)
 
 var sum = _.reduce(array, function(total, customer){
     let amount = customer.balance.slice(1);
     let string = '';
     for(let i = 0; i < amount.length; i++){
         if(amount[i] !== ','){
             string += amount[i];
         }
     }
     
     string = parseFloat(string);
     
     return total += string;
}, 0);
 
 return sum / array.length;
 
}; //arr.reduce((a,b) => a + b, 0) / arr.length





var firstLetterCount = function(array, letter){ //returns a number
    
    // let strName = ""
   // string.charAt(0)
   
   
    return _.reduce(array, function(n, object) {
        
         return n + (letter === object['name'].charAt(0).toUpperCase() || letter === object['name'].charAt(0).toLowerCase() );
}, 0);
        
        
//     return n + (val.gender === "female");
// }, 0);
    
} ;

var friendFirstLetterCount = function(array, customer, letter){ //output is number
    
    let friendsarr = [];
    
 for(let i = 0; i < array.length ; i++){                           
 
                                                                     
     if (array[i].name === customer){
         friendsarr = array[i].friends;
     }
     
 }
        
        return _.reduce(friendsarr, function(acc, nameObject){
            if (nameObject.name.charAt(0).toUpperCase() === letter.toUpperCase()){
                return acc += 1;
            } return acc
        }, 0);
        
  
};





var friendsCount = function(array, name){  //returns array
    
    //return the names of customers in an array that have the given name in their friends list
    
    
//   return _.reduce(array, function(acc, currentObj) {
    //if it has the given name in the customers friends list.. push it to an array.. then return that array
    
    
      let friendsarr = [];
     let allfriends = []
    
 for(let i = 0; i < array.length ; i++){                           
 
                                                                     
     if (array[i].name){
         friendsarr = array[i].friends;
         
     }
     
   
        
        
         _.reduce(friendsarr, function(acc, nameObject){
            if (nameObject.name === name){
                 allfriends.push(array[i].name)
            }
        }, 0);}
    
    
    
    return allfriends
    
    
    

    
};

var topThreeTags = function(array){ //output array 
    

    let tag = [];
    for (let i = 0; i < array.length; i++) {
        tag.push(array[i].tags);
       
    } for (let i = 0; i < tag.length; i++){
        tag.concat(tag[i])
    } console.log(tag)
    
    let count = tag.reduce((arr, index) => {
        arr[index] = (arr[index] || 0) + 1;
        return arr;
    }, {});
    console.log(count)
    let maxCount = Math.max(...Object.values(count));
     //returns the largest of numbers    //this brings back the values
     console.log(maxCount)
    let mostFrequent = Object.keys(count).filter(k => count[k] === maxCount);
                //this is the tags names    //filtering thru the keys,  equaling to max count
    
    // if (mostFrequent.length >= 3) {
    //     return mostFrequent;
    // } else {return mostFrequent;

    // }  
    
    
    
    
    
    
    
    
    
//     let tag = []
//     for (let i = 0; i < array.length; i++){
//         tag.concat(array[i].tags);
//     }
    
// let wordCount = _.reduce(tag, function(acc, currWord){

  
// if (acc[currWord]){ 
//   acc[currWord] += 1;   //here we increment
// return acc;
// }
// acc[currWord] = 1 // making key value pair if it didnt exist

// return acc;

//   }, {})


// var nestedArray = [];

// _.each(wordCount, function(count, word, object){
//   nestedArray.push([word, count])
// })


// nestedArray.sort(function(a, b){
//   return b[1] - a[1];
// })


// let resultArr = [];

// for(let i = 0; i < 3; i++){
//   resultArr.push(nestedArray[i][0])
// }

// return resultArr


    
    
    
    
    
    
    
    
    
    
    
    
};
 

var genderCount = function(array){
    
    
    
    
    
    
// return _.reduce(array, function(n, val) {
//     return n + (val.gender === "female");
// }, 0);
 
// }
    
    
    
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
