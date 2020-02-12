/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point. Basically, variables are named 
 * containers in which we use to create and store values.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration // 
//In order to declare something we must type the var keyword followed by 
// whatever we would like to name the variable. In this example, we are calling 
//the variable myName. We also alsways use Camel Case format while doing so.
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
//Once we have declared and named our variable, we can intialize or assign it a value.
//In order to assign a value, we just use the equals sign "=", also called assignment operator, 
// after our declared variable and type whatever value you want that variable to have after the 
//equals sign. Here, we have assigned the data  type 'john' to our myName variable.
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
//Once we have declared and assigned our variable, we don't need to use the var keyword anymore.
//We can simply use the name of the variable to access it and its value, including if we decide to change 
//the value. All we have to do is name the variable and assign it a new value like below.
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

//1. let //
// Let is a keyword similar to var because we can use it to declare and re-assign variables. 
//But unlike var, let is limited to a scope of a block statement while var is not limited to any scope. 
//A scope determines what we have access to, but we will get more into that later. 
//Also, let cannot be accessed before it is declared. 

let myAge = 21;
console.log(myAge); // prints => 21
myAge = 22;
console.log(myAge); // prints => 22
//here it allowed us to change the assigned value from 21 to 22.

/*but if we were to try to access the variable before it is declared it will throw back an error.
console.log(eyeColor); // prints => Ref Error: eyeColor is not defined.
let eyeColor = "Green";
*/

//Beacause let is more limited than var, it becomes useful when trying to write cleaner code and finding accidental 
//errors in your code.

// 2. const //
// The const keyword is similar to let in that const is limited to a scope of a block statement, 
//but the value of a const cannot be changed. Const cannot be re-assigned nor redeclared.
//You must assign a value to const immediately.

const myDogsName = 'Bulleit';
console.log(myDogsName); // prints => "Bulleit"
//allows you to declare a variable and assign it a value right away.

/*
myDogsName = "Booger"; 
console.log(myDogsName); // prints => TypeError because its assigned with const and cannot be changed.
*/



// 3. Hoisting //
// Hoisting is a term in Javascript which is used when we talk about trying to reference something 
// before it is declared. If we say a var declaration is hoisted to the top, we mean the var
// declaration is dragged to the top of the program. Var and function declarations can be hoisted to the 
//top, or before the statements of the program happen. Let and const cannot be hoisted.
//Also, with hoisting, only the declaration is brought to the top, not the initialiazation. 
//Let's look at examples to get a better understanding.

console.log(num); // => prints undefined 
var num;
num = 5;
// we referenced the variable before it was declared or initialized. Since initialization does not
// get hoisted to the top of the program but declaration does, we just get undefined.

num = 5;
console.log(num); // => prints 5
var num;
//In this example, since we declared the variable after it  was referenced, but initialized it beforehand,
//so it will print the value.


/*
//if you try to reference let or const before they are declared, it will not work the same way. You will
// just recieve a Reference Error.
console.log(name); // => prints Ref Error
console.log(age); // => pringt Ref Error

let name = "Jonny";
const age = 31;
*/
















