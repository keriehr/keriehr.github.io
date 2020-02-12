/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// ## Step 1 - Search
// 
//  2. Implement a function called `search` with a signature of `search(animals, name) { //... }` that:
//   - Takes a paramater representing an Array of `animals`.
//   - Takes a paramater representing a String, the name of an animal on which to perform a search.
//   - Looks through the `animals` Array, and returns the animal's Object if an animal with that name exists.
//   - Returns `null` if no animal with that name exists
//  3. Use the search bar at the top of the page to make sure your function works.

/*
ARRAY [] IS ANIMALSSSSSSSSSSSS
OBJECT {} IS ANIMAL

ANIMALSSSSSS = [

0: {species: "dog", name: "Bob", noises: Array(5), friends: Array(0)}
1: {species: "duck", name: "Jerome", noises: Array(4)}
2: {species: "cat", name: "Sally", noises: Array(2)}
3: {species: "bunny", name: "Fred", noises: Array(2)}
length: 4

]

*/

//create function
function search(animalsArray, nameOfAnimalString) {


//LOOK THROUGH ANIMALSSSSS ARRAY FOR ANIMAL NAME THAT EXISTS
//FOR LOOP TO LOOK THROUGH INDEX OF ARRAY
    for (var i = 0; i < animalsArray.length; i++) { //LOOKING THROUGH ANIMALS ARRAY
 
 if (nameOfAnimalString === animalsArray[i].name){ //if the name of the animal is equal to the name in the object in the array,
     return animalsArray[i]; //then it will return the animals object
 } 

} return null; // returns null if animals name is not found. 
//PLACEMENT of null IS IMPORTANT. must be on outside of for loop otherwise is will stop after first animal
    
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



function replace(animals, name, replaceObj){
    //created a replace function with 3 parameters
 
     for (var i = 0; i < animals.length; i++) { //looking through the animals array
    
    
    if (name === animals[i].name){ //if the name of the animal is equal to the name in the object in the array,
     animals[i] = replaceObj; //then we will replace the entire onbject with the replacement object parameter given
    
    }
    
} 
}



//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



function remove(animals, name){
//create function called remove with 2 parameters
    
    
    
    for (var i = 0; i < animals.length; i++) { //looking through the animals array
    
    if (name === animals[i].name){// if the name parameter equals the name of the animal inside the array's object,
        animals.splice(i, 1);// then we will remove it.  i is the location. 1 is the amount of elements being removed
    }
    
    }}
    




//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



function add(animals, newAnimal){
    
   // checks the object animal has name property
     
    for (var i = 0; i < animals.length; i++) { //looking through the animals array
    
    if (newAnimal.name === animals[i].name){ //checking to see if the new animal name matches the animal object names in the array
        return;
    }
    
    
} animals.push(newAnimal); //adding newAnimal if it doesnt match other names
}




/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
