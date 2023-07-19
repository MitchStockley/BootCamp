//Concurrency is whenever things are happening "at the same time" or in parallel

//There are three strategies in JavaScript that you'll need to know of when working
// with concurrency: callbacks, Promises, and the async and await keywords.

// Callbacks is just a function that takes another function as an argument, which is
// then called when the rest of the initial function has finished. In other words, it's just a
// function calling a function

// function doSomething(callback) {
//     callback();
// }
// function sayHi() {
//     console.log("Hi!");
// }
// doSomething(sayHi);


//There are two functions here: judge() and getGrade(). We call the function
// getGrade() with two arguments: 85 and the function judge(). Note that when
// calling the function as an argument, we do not include the parantheses. The judge()
// function gets stored in a callback. After determining the grade, the function that is
// stored in a callback (judge() in this case) gets called with the grade.

// function judge(grade) {                                                      
//     switch (grade) {
//         case  "A":
//             console.log("You got an", grade, ": amazing!");
//             break;
//         case "B":
//             console.log("You got a", grade, ": well done!");
//             break;
//         case "C":
//             console.log("You got a", grade, ": alright.");
//             break;
//         case "D":
//             console.log("You got a", grade, ": hmmm...");
//             break;
//         default:
//             console.log("An", grade, "! What?!");
//     }
// }

// function getGrade(score, callback) {
//     let grade;
//     switch (true) {
//         case score >= 90:
//             grade = "A";
//             break;
//         case score >= 80:
//             console.log(score);
//             grade = "B";
//             break;
//         case score >= 70: grade = "C";
//             break;
//         case score >= 60:
//             grade = "D";
//             break;
//         default:
//             grade = "F";
//     }
//     callback(grade);
// }
// getGrade(85, judge);  


//Ecercise 13.1
// This exercise will demonstrate how to use a callback function, creating a way to pass
// a value from one function to another by invoking a callback function. We will create
// a greeting callback using a full name in a string

// splitname("Mitchell Stockley",greet);


// function splitname(stringFullname,callback){

//     let arrayfullname = stringFullname.split(" ");
//     callback(arrayfullname);
// }


// function greet(arrayfullname) {
//     console.log(`Hello ${arrayfullname[0]} ${arrayfullname[1]}}`);
// }


// processPerson(logRaceAndAge);

// function logRaceAndAge(race, age) {
//     console.log(`Race: ${race}, Age: ${age}`);
//   }

//   function processPerson(callback) {

//     let personRace = "Caucasian";
//     let personAge = 27;


//     callback(personRace, personAge);
//   }


//Promises

//   With Promises, we can organize the sequence of our code in a slightly easier-to-
//   maintain way. A Promise is a special object that connects code that needs to produce
//   a result and the code that needs to use this result in the next step.

// When we create a Promise, we give it a function. In the following example, we use a
// convention that we have seen a lot; we are creating a function on the spot. So, inside
// the argument list we are defining the function, often done using arrow functions as
// well. This function needs two parameters, and these parameters are callbacks. We
// have called them resolve and reject here.

//When resolve() is called, the Promise is presumed to be successful and whatever
// is between the arrows is returned and used as input for the then method on the
// Promise object. If reject() is called, the Promise failed and the catch() method
// on the Promise object (if present) is executed with the argument of the reject()
// function

// let promise = new Promise(function (resolve, reject) {
//     // do something that might take a while
//     // let's just set x instead for this example
//     let x = 2;
//     if (x > 10) {
//         resolve(x); // on success
//     } else {
//         reject("Too low"); // on error
//     }
// });
// promise.then(
//     function (value) {
//         console.log("Success:", value);
//     },

// ).catch(error => console.log(error));

//So when we call then on the Promise, we basically say: figure out what the value
// of the Promise is, and when you know, execute one function if the Promise was
// resolved or a different function if it was rejected. When a Promise is neither resolved
// nor rejected, we say that the Promise is pending.
// then() is a Promise itself, so when it returns we can use the result for the next then()
// instance. This means we can chain the then() instances, which can look like this:

// const promise = new Promise((resolve, reject) => {
//     resolve("success!");
// })
//     .then(value => {
//         console.log(value);
//         return "we";
//     })
//     .then(value => {
//         console.log(value);
//         return "can";
//     })
//     .then(value => {
//         console.log(value);
//         return "chain";
//     })
//     .then(value => {
//         console.log(value);
//         return "promises";
//     })
//     .then(value => {
//         console.log(value);
//     })
//     .catch(value => {
//         console.log(value);  //.catch catches any error at the end 
//     })


//practice 13.2
//In this exercise, you will create a counter that will output the values in sequence
// using Promises.

// function counter(val) {
//     console.log(val);
// }

// let promise = new Promise(function (resolve, reject) {
//     resolve("start counting");

// })

// promise.then(val => {
//     counter(val);
//     return "one";
// })

// .then(val => {
//     counter(val);
//     return "two";
// })

// .then(val =>{
//     counter(val);
//     return "three"
// })

// .then(val =>{
//     counter(val);
// })
// .catch(error => console.log(error));

//async and await

// We have just seen the Promise syntax. With the async keyword, we can make a
// function return a Promise. This makes the Promises nicer to read and look a lot like
// synchronous (non-concurrent) code. 

//we can use the more powerful await keyword to wait until
// the Promise is done. await only works in an asynchronous function.

// function saySomething(x) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("something" + x);
//         }, 2000);
//     });
// }
// async function talk(x) {
//     const words = await saySomething(x);
//     console.log(words);
// }
// talk(2);
// talk(4);
// talk(8);


//Practice exercise 13.3

// This exercise will demonstrate how to use await to wait on a Promise inside an async
// function. Using await and async, create a counter with timeout(), and increment a
// global counter value.

// let cnt = 0;
// function outputTime(val) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             cnt++;
//             resolve(`x value ${val} counter:${cnt}`);
//         }, 1000);
//     });
// }
// async function aCall(val) {
//     console.log(`ready ${val} counter:${cnt}`);
//     const res = await outputTime(val);
//     console.log(res);
// }
// for (let x = 1; x < 4; x++) {
//     aCall(x);
// }

//Event loop

console.log("Hi there");
setTimeout(() => console.log("Sorry I'm late"), 1000);
console.log(add(4, 5));
function add(x, y) {
    return x + y;
}

