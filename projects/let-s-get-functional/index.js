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

var maleCount = function(array) { //creating ourfunction with the para array
 return _.filter(array, function(customerObj){ //using filter to filter thru the array
    return customerObj.gender === "male"; //brings back array property //checking to see if it is equal to "male"
}).length; // it is returning the number of how many were equal to male 
};





var femaleCount= function(array) { //output is a number //creating the function with para array



return _.reduce(array, function(n, val) { //using reduce function this time to iterate thru the array
    return n + (val.gender === "female"); //if the objects gender is equal to female, it will add one to our accumulator.
}, 0);//a seed to start our accumulator at
//we return the value that reduce produces
 
}



var oldestCustomer = function(array){ //creating the function with the parameter array
    //output is string

let highestAge = 0; //creating a variable of highest age 
return _.reduce(array, function(prev, curr){ //using reduce to iterate through the array
  if(curr.age > highestAge) { //if the current object age is great than the highest age...
  //we change the value of highest age to the current age
    highestAge = curr.age;
    return curr.name; //then we return the current object's name
  }
return prev; //otherwise we return the previous 
}, 0); //seed to start the accumulator at
 
};

var youngestCustomer = function(array){ //creating the function with the para array
    //output is string

let youngAge = Infinity; //creating a variable with the value of infinity
return _.reduce(array, function(prev, curr){ //using reduce to iterate through the array
  if(curr.age < youngAge) { //if the current objects age the less than the young age..
    youngAge = curr.age; // update young age to the current age
    return curr.name; //then we return the current objects name
  }
return prev; //otherwise return previous
}, 0);//seed to start accumulator at
 
};



var averageBalance = function(array){ //creating a function with the para array
    // output is a number
 

 
 var sum = _.reduce(array, function(total, customer){ //using reduce to iterate through the array
     let amount = customer.balance.slice(1); //using slice to cut off the $, and only keep the numbers
     let string = '';//creating a variable string that is an empty string
     for(let i = 0; i < amount.length; i++){ //using for loop to loop through the amount
         if(amount[i] !== ','){ //if it is not a comma, then we are going to add
             string += amount[i]; //here we add the number to the string
         }
     }
     
     string = parseFloat(string); //this lets us use the numbers in the string as numbers
     
     return total += string; //here we return the total of all the numbers added together
}, 0);//seed for accum. to start at
 
 return sum / array.length; //then we return the sum divded by the length of the array  to get an average
 
}; 



var firstLetterCount = function(array, letter){ //creating a function that takes the para, array and letter
    //returns a number
    
   
   
    return _.reduce(array, function(n, object) { //using reduce to iterate through the array
        
        //if the letter is equal to the objects names' first letter, whether it upper or lower case, 
        //then it will add it to our accumulator "n"
        // and it will return that final number 
         return n + (letter === object['name'].charAt(0).toUpperCase() || letter === object['name'].charAt(0).toLowerCase() );
}, 0); //seed to start accum. at
        
  
} ;

var friendFirstLetterCount = function(array, customer, letter){ //creating a function that takes the para, array, customer, and letter
    //output is number
    
    let friendsarr = []; //creating an empty array
    
 for(let i = 0; i < array.length ; i++){  //using for loop to loop through the array                
 
                                                                     
     if (array[i].name === customer){ // if the name is equal to the give customer..
         friendsarr = array[i].friends; //then add the friends to our variable freindsarr
     }
     
 }
        //returning the product of this function which is the total amount of friends from given customer, thats names starts with given letter
        return _.reduce(friendsarr, function(acc, nameObject){ //using reduce to iterate thru the array
            if (nameObject.name.charAt(0).toUpperCase() === letter.toUpperCase()){ 
                //if the name in the friendsarr starts with the given letter..
                return acc += 1; //then add 1 to accum.
            } return acc //return the accum. amount
        }, 0); //seed to start accum. at
        
  
};





var friendsCount = function(array, name){  //creating a function with the para, array and name
    //returns array
    
    //return the names of customers in an array that have the given name in their friends list
    
    
    
      let friendsarr = []; //created 2 different arrays
     let allfriends = []
    
 for(let i = 0; i < array.length ; i++){ //using for loop to loop thru given array                 
 
                                                                     
     if (array[i].name){ //if the array a name..
         friendsarr = array[i].friends; // then add the friends array to friendsarr
         
     }
     
   
        
        
         _.reduce(friendsarr, function(acc, nameObject){ //using reduce to iterate thru the new friendsarr
            if (nameObject.name === name){ //if the friendsarr contains the given name..
                 allfriends.push(array[i].name) // the add that customers name to the allfriends array
            }
        }, 0);}
    
    
    
    return allfriends //returning the final array
    
    
    

    
};

var topThreeTags = function(array){  //creating function with the para, array
    //output array 
    

    let tag = []; //creating an array
    for (let i = 0; i < array.length; i++) { //using for loop to loop thru given array
        tag.push(array[i].tags); //adding the tags array into the new tag array
    }
    var merged = [].concat.apply([], tag); //then turning all those little arrays into one big single array
   
    
    let count = merged.reduce((arr, index) => {  //using reduce to iterate through the merged array
        arr[index] = (arr[index] || 0) + 1; //keeping count of each tag/element
        return arr; //returning the accumulator
    }, {});
    
    let maxCount = Math.max(...Object.values(count));
     //math.max returns the largest of numbers    // obj.values, brings back the values of our count object
     
    let mostFrequent = Object.keys(count).filter(k => count[k] === maxCount);
                //this is the tags names    //filtering thru the keys,  equaling to max count
    
    if (mostFrequent.length >= 3) { //if the length of most frequent is greater than or equal to 3..
        return mostFrequent; //then return mostfrequent  // this gives us the top 3 tags
    } else {return mostFrequent; //otherwise returning most frequent 

    }  
    

    
    
};
 

var genderCount = function(array){ //creating function that taske the parameter, array
    
    //creating variables i will later use
    var male
    var female
    var nonbin
    
    
     male = _.reduce(array, function(n, val) { //using reduce to return the amount of males
    return n + (val.gender === "male");
}, 0);
    
    
 female = _.reduce(array, function(n, val) { //using reduce to return the amount of females
    return n + (val.gender === "female");
}, 0);
 
 nonbin =  _.reduce(array, function(n, val) { //using reduce to return thr amount of others
    return n + (val.gender === "non-binary");
}, 0);

var key = "non-binary" //creating key called non binary
    var resultObj = {} //creating object to push values into
 resultObj.male = male // adding male count into object as a key value pair
resultObj.female = female    // adding female count into object as a key value pair
resultObj[key] = nonbin //adding non binary amount value into object

return resultObj //returning the final object with all genders and amount of each  as key value pairs.
    
    
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
