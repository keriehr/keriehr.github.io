/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */
//console is crtl shift j or f12 
//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = "dog";
//creating empty object named animal and using dot notation to add its species
//and now use bracket notation to add the name
animal["name"] = "Bob";
//adding key noises with and empty array as the value
animal.noises = [];
console.log(animal);
//prints animal object 

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];
//create empty array called nosies
noises[0] = "bark";
//used bracket notation to add bark to the array
noises.push('woof');
//using .push to add "woof" to the end of nosies array
noises.unshift('snore');
//using .unshift to add 'snore' to the beginning of the array
noises[noises.length] = "cry";
//using bracket syntax again to add "cry" to the end of the array

console.log(noises.length);
//printing the lenght
console.log(noises[noises.length-1]);
//printing the last value in the array
console.log(noises);
//printing the whole array


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
 animal['noises'] = noises;
 //using bracket syntax to add the array noises to the key 'noises' inside of our object animal
 
 animal.noises.push('sniff');
 //adding "sniff" to the noises array inside the object animal

console.log(animal);
//prints animals properties







/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 //to access properties on objects you can do any of the following
 obj.keyOne
 //dot notation
 obj['keyTwo']
 //bracket notation
 var key = 'keyThree'
 obj[key]
 
 
 
 
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */
 
 // use bracket notation to find what value is and the given index
 //Array[0] //would show us the value at the index 0
 // array[array.length-1] to find out what value is at the end of the array
 
 
 
 

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
//creating an empty array named animals
animals.push(animal);
//pushing the object animal into the array animals
console.log(animals);

var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
//assigning duck to given data above


animals.push(duck);
//pushing the duck object into thr animals object
console.log(animals);

var cat = { species: 'cat', name: 'Sally', noises: ["meow", "hiss"] };
animals.push(cat);

var bunny = { species: "bunny", name: "Fred", noises: ["pur", "growl"]} ;
animals.push(bunny);

console.log(animals);







//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I'm choosing an array because we're just listing friends. We dont need any key value pairs

var friends = [];
//created an array called friends


//now making a function called getRandom
function getRandom (animals){
     return animals[Math.floor(Math.random() * animals.length)];
     
    //this function takes the animals array and returns the index of a random element using the math.random syntax
    
    
    
}
getRandom(animals);
//calling the function
console.log(friends);


// here im adding `friends` as a **property** named `friends` on one of the animal in `animals`

animal['friends'] = friends;



console.log(animals);
//checking the output




//notes so i dont get confused on which is which
//array is plural animalsssssss
//object is animal










/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
