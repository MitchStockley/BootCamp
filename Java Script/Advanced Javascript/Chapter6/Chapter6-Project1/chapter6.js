// function getRecursive(nr) {
//     console.log(nr);

//     if (nr < 10) {
//         getRecursive(++nr);
//     }


// }

// getRecursive(7);





// Set timeout order
// Use the arrow format to create functions that output the values one and two to the
// console. Create a third function that outputs the value three to the console, and then
// invokes the first two functions.
// Create a fourth function that outputs the word four to the console and also use
// setTimeout() to invoke the first function immediately and then the third function.





let start = () => console.log("one");
let next = () => console.log("two");

let other = () => {
    console.log("three");
    start();
    next();
}

let last = () =>{ 
    console.log("four");
setTimeout(start,1000);
other() 
}

last();


