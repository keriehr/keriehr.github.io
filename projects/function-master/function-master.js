//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {

var values = [];  // created an array to store the values in

for (var key in object){    //for in loop to go loop through the object     
    values.push(object[key]);   //pushing the values from the object in the values array
}

return values; //returning values array

} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {

var keys = []; //created an array to store the keys in

for (var key in object){ //for in loop to looping through the object
    keys.push(key); //pushing the keys into the keys array
    
   
} 
var newKey = keys.join(" "); //turning the keys array into a string called newkey

return newKey; //returning the newkey string



}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    
var value = []; //creating an array to store the values in

for (var key in object){ //for in  loop to loop thru the object

if (typeof object[key] ===   "string"){  //checking to see if type of the value is a string
    value.push(object[key]); //if it is, we add the value to the value array
}
    

} 

var otherVal = value.join(" "); //then we change the array into a string



return otherVal; //returning the string of values
    
}  
    


//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    
    if (Array.isArray(collection)){ //checking to see if the collection is an array
        return 'array';} // if it is an array, return the string "array"
        
        else {return 'object'} //otherwise, return "object"
    }
    
    
    
    

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    
    
    return string.charAt(0).toUpperCase() + string.slice(1) ;
//    using charAt to go to the index of 0 and capitalize that letter and then concat the rest of the word to the new capatilized letter
// it returns this new capatilazed word 
    
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    
    
      var words = string.split(' '); // creating a variable that splits a string into an array of substrings
    for(var i = 0; i < words.length; i++) { //for loop to loop through the array
        var word = words[i]; //created another variable that takes each index..
        words[i] = word[0].toUpperCase() + word.slice(1); //and here we capitalize each word 
    }
    return words.join(' '); // and return it as a string with spaces between each  word
    
    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    
    //search for name property 
    //   , return name value
    
 for (var key in object){ //for in loop to loop thru the object
     let strName = object["name"].charAt(0).toUpperCase() + object["name"].slice(1); 
     // created a variable strName that stores the value of "name", capitalizes the first letter, and concats the rest of the word to the uppercase letter
     var str1 = "Welcome " + strName + "!"; // variable str1  will concat Welcome + the uppercased name and a !
 }   
 
 return str1; //returns the new string, str1
 
 
 
} 
//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    
      
 for (var key in object){  //for in loop to loop through object
     let strName1 = object["name"].charAt(0).toUpperCase() + object["name"].slice(1);  
     //capitalizing the first letter of name value
     let species = object["species"].charAt(0).toUpperCase() + object["species"].slice(1);
     //capitilzing first letter of species value
     var str2 =  strName1 + " is a " + species; 
     //concating uppercase name value + is a + uppercase species value
 }   
    
    
    return str2; //returning new string

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {

for (var key in object){  // for in loop to loop thru object
    
    if (Array.isArray(object['noises']) === true && object['noises'].length !== 0 ){ 
        // if the object has an array called noises, and its not empty..
        return object['noises'].join(' '); // it will return the value of noises as a string
    
}
}return "there are no noises"; // if not it will return this string




}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {

if (string.includes(word)){ //if the string contains this word..
    return true; // it returns true
}else {return false} // if not it returns false

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    
    for (let key in object){ // looping thru object
        object['friends'].push(name); //adding the value, name, to the the array, friends, inside the object 
        return object; // returns object
    }
    

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    
    
    // use for in loop to look through the object for the key "friends"
    for (var key in object){
        if (key === "friends"){
    //if there is the key "friends"...
    for (var i = 0; i < object['friends'].length; i++){ //using for loop to check for the 'friends' value: "name"
        if (object.friends[i] === name){ //if it is equal return true
            return true;}
    
        } }}
return false; // if not equal return false
} // return object['friends'].includes(name)        return false // instead of lines 204 -207

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    
  const result = [];      // create an array we have to later return

 for(let i = 0; i < array.length ; i++){  //looping thru array 
 
 //checking if current person is the target
     if (array[i].name !== name){
        
         // checking if current person friends array includes the target
         if (!array[i].friends.includes(name)){
             result.push(array[i].name); //if it doesnt, add the non friend to the array, result.
         }
     }
 }

return result;  // returning the result array containing all the not friends names


}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    
    
//   if (key in object === key){ 
//       object[key] = value}
    
    // for (var key in object) { //for in loop to loop thru object 
    //   if (object.hasOwnProperty(key) !== key){
        object[key] = value;
      return object;
    
}
    
    // if (object.hasOwnProperty(key) === key){
    //     object[key] = value;
    // }
    //  else {object.key = value}
    // }
    
    
  //  Should update the property <key> on <object> with new <value


//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    
 
      for (let i = 0; i < array.length; i++){ //looping through array 
          if (object.hasOwnProperty(array[i])){ //checking if object has a property that is the same as any in the index
              delete object[array[i]]; // deleting the property that is the same 
          }
      }
  }
   
    
    



//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    
   
//declaring new array called unique
//using new operator and  set to store unique values. using ... operator to turn set back into an array 

let unique = [...new Set(array)];
return unique //returning new array

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}