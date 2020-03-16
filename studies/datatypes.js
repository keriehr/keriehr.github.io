/*
*
* DATA TYPES: 
*
* 0. There are different data types of the values that we assign to all of our variables.
* 1. Data Type is literally the type of the value.
* 2. Data types can be simple or complex.
*
*
*/
//1. Number //
//It is just a number. It can be typed with or without decimals, positive or negative. It is a simple data type.
var a = 4;
var b = -5.111;

console.log(a); // prints => 4
console.log(b); // prints => -5.111

//2. String //
// A string is a simple data type that is just a string of characters you want to assign as the value.
// It could be a name, a sentence, or any number of words. As long as it is inside quotations marks ('',"")
//it will be considered a string. We store each character in a string starting at a zero index.
//We would use brakcet notation to access any character in the string.
//To access the H in the string below, we could use weather[0] to access that H. Or weather[1] to access the o.. and so on.
//To access the last character we would use weather[weather.length - 1].
var weather = "Hot and Sunny, Temperature is 85.";
console.log(weather); // => prints "Hot and Sunny, Temperature is 85."

//3. Boolean //
//Boolean is a simple data type and has only two values: true or false.
//This comes is handy when you need know if a value is true or false, or other concepts such as control flow.
var currentlyAlive = true;
console.log(currentlyAlive); //=> prints true

//4. Array //
//An array is a complex data type that is a collection. It is a collection that lets us store an indexed list of values.
//This index list starts at 0 for the first element, 1 for the second element, and so on. We access values using brakcet notation.
//To access "keri" in the array below, we could use myArray[0]. To access true, it would be myArray[1], and so on for the following elements.
//To access the last element, we would use myArray[myArray.length-1]
//You can store any data type inside an array. To create an array, you'll need to use [].
var myArray = ["keri", true, 28];
console.log(myArray); //=> prints ["keri", true, 28]

//5. Object //
//An object is another complex data type that is a collection. But unlike an array, the values stored inside an object
// do not have an indexed postion. An object has key:value pairs instead. You create an object using {}.
//To access an object we could use dot notation or bracket notation. Bracket notation to access a value in an object like below
// would be myPet[name] to access "Bulleit". Or we could use dot notation, myPet.age would let us access the value 3.
var myPet = {
    name: 'Bulleit',
    age: 3,
    isDog: true,
};
console.log(myPet); // => prints  {name: 'Bulleit', age: 3, isDog: true}

//6. Function //
// A function is simply a way to create the most efficient instructions for the program to execute. It allows us to make a block of code that
//is  encapsulated. We can run this code as many times as want, whenever we want. It makes things more simple by not having to write new 
//instructions every time we want to perform a certain action in our program. Functions are complex data tyes.
// the function syntax is set up like this : 
/* function funcName (parameter1, parameter2)
{ function body
return statement }
*/
function range(num1, num2){ //here we have our function, its name, and its parameters

if (num1 < num2 ){ 
 for (var i = num1 ; i <= num2; i++)
 console.log(i)
}// here i have used a conditional statement to list the numbers from the first parameter to the second parameter in order.
else {
  for (var i = num1 ; i >= num2; i--)
   console.log(i)
  } // and here i have stated that if the second parameter is bigger than the first parameter, to list the numbers in descending order.

}

//and here we call our function to see it work in action.
range(1, 5) // prints => 1, 2, 3, 4, 5
range(20, 15) //prints => 20, 19, 18, 17, 16, 15

// 7. Undefined //
//Undefined simply means that a variable has been declared, but it has not had a value assigned to it yet. It is a simple data type.
var cup ;
console.log(cup); //=> prints undefined because there is no value assigned.

//8. Null //
// Null is a simple data type. Null is the representation of no value. Null can be assigned to a variable to give 
//the variable's value no value at all, meaning an empty or non-existent reference. 
var book = null;
console.log(book); // => prints null



//9. NaN //
// NaN stands for Not-A-Number. NaN is when the initial value is Not A Number. NaN is a simple data type.
//It is also not a keyword like null, it is acutally a property of the global object.
// for example, if you try to multiply a number times a string, it will come back NaN because the value doesn't equal a number at that point.
var num4 = 4 * 'hi';
console.log(num4); //=> prints NaN

// 10. Infinity //
// Infinity is a global property. It is a numeric value that represents infinty.
//Infinity represents a postive infinty and -Infinity represents a negative infinty.
//Any positive number multiplied by Infinity equals Infinity; while any number divided by Infinity equals 0.
let infin = Infinity + 1;
console.log(infin); // => prints Infinity

let neg = 1 / -0;
console.log(neg);  // => prints -Infinity


// 11. Difference between Simple and Complex Data Types //
// A simple data type is simple because they do not store, collect, or combine any values. They have a definite size when they are stored in memory.
//Simple data types do not change the original values. They will only return new simple values throughout operations. 
//A number, string, boolean, NaN, undefined and null are all simnple data types.
//Complex Data Types are complex because they can store, collect, and combine other values; therefore they are an indefinite size.
//Objects, Arrays, and Functions, are all complex data types.


// 12. Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are they different? //

//When we assign primitive variables to other variables; we are copying the value to the new variable.Thus, they are copied by value.
// A primitive data type has a fixed size in memory, that is why variables can directly store primitive types.
var c = 10;
var d = c ;
console.log(c); //=> prints 10
console.log(d); // => prints 10 because it copies the value of c

// Since complex values can be any size, their values cannot be directly store in memory. So in order to access a complex type, we reference 
//its location in memory (use the address in which that complex type is store at in memory). When we copy a complex types value or object to
//another variable using =, we are copying the reference to the location stored in memory.
var e = {student: 'josh'};
var f = e;
console.log(f) // prints => {student: 'josh'} 
//f is referencing e's location in order to copy e's values
