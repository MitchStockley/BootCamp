"use strict";
// function sayHello() {
//     let you = prompt("What's your name? ");
//     console.log("Hello", you + "!");
//     }

//     sayHello();

// let compliments = [
//   "you are beautiful",
//   "your eyes are lovely",
//   "you dance so well",
//   "you are good at everything",
// ];
// getCompliment();
// function getCompliment() {
//   let user = prompt("what isyour name?");
//   let complement = compliments[Math.floor(Math.random() * compliments.length)];

//   alert(`${user} ${complement}`);
// }

//Practice exercise 6.3

// function calculate(num1,num2,operator){
// if(operator === "*"){
//     return num1*num2;
// } else if(operator === "-") {
//     return num1-num2;
// } else if(operator === "/") {
//     return num1/num2;
// } else if(operator === "%") {
//     return num1%num2;
// }else if(operator === "**") {
//     return num1**num2;
// }else {
//     return num1 + num2;
// }

// }

// alert(calculate(10,3,"-"));


// Spread operator
// The spread operator is a special operator. It consists of three dots used before a
// referenced expression or string, and it spreads out the arguments or elements of an
// array.

// function addFourNumbers(x,y,z,a) {

//     console.log(x+y+z+a)
// }

// arr=[5,9];
// arr2=[6,7];

// addFourNumbers(...arr, ...arr2);



//Rest parameter
// Similar to the spread operator, we have the rest parameter. It has the same symbol as
// the spread operator, but it is used inside the function parameter list. Remember what
// would happen if we were to send an argument too many times, as here:

// function someFunction(param1,param2,...param3) {
//     console.log(param1,param2,param3);
// }

// someFunction("hi", "There", "how are you", "where are we going?","will this work?");

// Returning function values
// We are still missing a very important piece to make functions as useful as they are:
// the return value. Functions can give back a result when we specify a return value.
// The return value can be stored in a variable. We have done this already – remember
// prompt()?


// function addTwoNumbers(x = 0, y = 0) {

//     return x + y;
// }

// let result = addTwoNumbers(4, 5);
// console.log(` result is ${result}`);

// let resultArr = [];

// for(let i = 0; i < 10; i ++) {

//     let result = addTwoNumbers(i, i*2);
//     resultArr.push(result);
// }

// console.log(resultArr);

//Returning with arrow functions
// let addTwoNumbers = (x = 0, y = 0) =>  x + y; //no curly brackets if there is only one statement


// let resultArr = [];

// for(let i = 0; i < 10; i ++) {

//     let result = addTwoNumbers(i*5, i*i);
//     resultArr.push(result);
// }

// console.log(resultArr);

//Local variables in functions

// function testAvailability(x) {
//     let y = "local variable!";
//     console.log(`y is available here: ${y}`);
//     console.log(`x is available here: ${x}`);
// }

// testAvailability("hi");
// console.log(`y is not available here ${y}`);
// console.log(`x is not available here ${x}`);

// function testAvailability() {
//     let y = "I will return";
//     console.log(`y is available here: ${y}`);
//     return y;

// }

// let z = testAvailability();
// console.log(` z is available here ${z}`);

//let versus var variables
// The difference between let and var is that var is function-scoped, which is the
// concept we described above. let is actually not function-scoped but block-scoped. A
// block is defined by two curly braces { }. The code within those braces is where let is
// still available.

// function doingStuff() {
//     if(true) {
//         var x = "local"
//     }
//     console.log(x);
// }

// doingStuff();


// let x = "global";

// function doingStuff() {
//     let x = "local";
//     console.log(x);
// }

// console.log(x);
// doingStuff();

//Immediately invoked function expression //IIFE

//  (function(name) {console.log(name)})("Mitchell");

//  //using arrow to do the same thing 

//  ((day,month) =>{console.log(day,month)})("12","July");

//Practice exercise 6.5

// let val = "1000";

// let val2 = (() => {
//     let val = "Mitch";
//     console.log(`inside function ${val}`);
//     return val;
// })()

// console.log(`Outside function ${val}`);
// console.log(`Outside function val2 ${val2}`);

//Recursive functions
//call the same function from inside the function

// function getRecursive(nr) {
//     console.log("started function: " + nr)

//     if (nr > 0) {
//         getRecursive(nr - 1);
//     } else {
//         console.log("recursion is done")
//     }
//     console.log("finished" + nr);
// }
// getRecursive(3);


//Practice exercise 6.6
//The factorial of a number is the product of all positive integers
// bigger than 0, up to the number itself. So for example, the factorial
// of seven is 7 * 6 * 5 * 4 * 3 * 2 * 1. You can write this as 7!.


// function calcFactorial(nr) {
//     if (nr === 0) {
//         return 1
//     } else {
//         return nr * calcFactorial(nr - 1);
//     }
// }

// let num = Number(prompt("Give me a number to calculate a factorial for you."));
// let factorial = calcFactorial(num);
// alert(`The factorial of ${num} is ${factorial}`);

//Nested functions
// Just as with loops, if statements, and actually all other building blocks, we can have
// functions inside functions. This phenomenon is called nested functions:

// function doOutterFunctionStuff(nr) {
//     console.log("outer function");
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x) {
//         console.log(x + 7);
//         console.log(nr);
//     }
//     console.log(x);
// }

// doOutterFunctionStuff(2);

// let myFunc = function(food) {
//     console.log(`I like ${food}`);
// }

// myFunc("Chocolate");

// function myFunction(food) {
//     console.log(`i like ${food}`);
// }

// myFunction("chocolate");

//Function callbacks
//Here is an example of passing a function as an argument to another function:
// let fname =prompt("what is your name");

// let functionVariable = function () {
//     console.log("Not so secret though.");
// };


// function doFlexibleStuff(executeStuff) {
//     executeStuff() 


// }



// function random() {
//     console.log(`hello ${fname}`);
// }


// doFlexibleStuff(random);

function youGotThis () {
    console.log("You're doing really well, keep coding!");
};

setTimeout(youGotThis, 1000);  //time out runs it after 1000 miliseconds
