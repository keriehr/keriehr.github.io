// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////



let arrays = [[1, 2, 3], [4, 5], [6]];


function flatten(array) {


 // declaring new array. using reduce method with concat to flatten the array of arrays

	var newArr = array.reduce(function(previous,current){
		return previous.concat(current);
	},[]); //empty array for undefined 
	return newArr; //returning new flattened array



}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, test, update, body) {

//takes 4 parameters

  for (let i = value; test(i); i = update(i)) { //for loop to use test function on each value
    body(i); //then it calls the body function to give it the current value
  }
}

// loop(3, n => n > 0, n => n - 1, console.log);





// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  
  
  
   for (let i = 0; i < array.length; i++) {  //for loop to loop thru the array
    if (!test(array[i])) { // testing for the opposite of each element in the array
      return false; //then it returns false
    }
  }
  return true; //otherwise it is true

}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {

// computes the dominant writing direction in the text
  let scripts = countBy(text, char => { // reusing previous functions for help..
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none"); //counting characters and filtering out scriptless characters
  switch (scripts.length) { // using switch statment 
    case 0:
      return 'no dominant direction found';
    case 1:
      return scripts[0].name;
    default:
      if (scripts.reduce((acc, cur) => acc.count === cur.count)) { //finding the direction count with reduce
        return 'no dominant direction found';
      } else {
        return scripts.reduce((acc, cur) => acc.count >= cur.count ? acc.name : cur.name);
      }
  }




}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
