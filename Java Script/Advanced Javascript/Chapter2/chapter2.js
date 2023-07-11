// const someConstant = 3;
// someConstant = 4;

//let funActivity = "Let's learn JavaScript";
// let funActivity = 'Let\'s learn JavaScript'; // escape caractor allows the code to run with " ' "
// console.log(funActivity);

// let language = "JavaScript";
// let message = `Let's learn ${language}`;
// console.log(message);

// let str3 = "new \nline";  //\n creates a new line

// console.log(" I am containing a : \\");

// let intNr = 1;
// let bigNr = 90071992547409920n;

// let result = intNr + bigNr;

// let str1 = "JavaScript is fun!";
// let str2 = "JavaScript is fun!";
// console.log("These two strings are the same:", str1 === str2);

// //Symbols - Cant be equal too each other (even the the contents are the same)
// let sym1 = Symbol("JavaScript is fun!");
// let sym2 = Symbol("JavaScript is fun!");
// console.log("These two Symbols are the same:", sym1 ===
// sym2);

// let str = "Hello";
// let nr = 7;
// let bigNr = 12345678901234n;
// let bool = true;
// let sym = Symbol("unique");
// let undef = undefined;
// let unknown = null;

// console.log("str", typeof str);
// console.log("nr", typeof nr);
// console.log("bigNr", typeof bigNr);
// console.log("bool", typeof bool);
// console.log("sym", typeof sym);
// console.log("undef", typeof undef);
// console.log("unknown", typeof unknown);

// let nr1 = 2;
// let nr2 = "2";
// console.log(nr1 * nr2);

// let nrToStr = 6;
// nrToStr = String(nrToStr);
// console.log(nrToStr, typeof nrToStr);

// let strToNr = "12";
// strToNr = Number(strToNr);
// console.log(strToNr, typeof strToNr);


// strings convert to true, 
// let strToBool2 = "false";
// strToBool2 = Boolean(strToBool2);
// console.log(strToBool2, typeof strToBool2);

// let str1 = 'Laurence';
// let str2 = "Svekis";
// let val1 = undefined;
// let val2 = null;
// let myNum = 1000;
// console.log(str1, typeof str1);
// console.log(str2, typeof str2);
// console.log(val1, typeof val1);
// console.log(val2, typeof val2);
// console.log(myNum, typeof myNum);

// let fname = "Mitchell";
// let age = "27";
// codeJs = true;

// alert(`Hello, my name is ${fname}, I am ${age} years old, and i can code in javascript: ${codeJs}`);

// let nr1 = 20;
// let nr2 = 4;
// let str1 = "Hi";
// let nr3 = 3;
// let result1 = nr1 - nr2;
// let result2 = str1 - nr3;
// console.log(result1, result2);

// let nr1 = 2;
// let nr2 = 3;
// let result1 = nr1 ** nr2;
// console.log(result1);

//Modulur gives you the remainder of values (%)
// let nr1 = 10;
// let nr2 = 3;
// let result1 = nr1 % nr2;
// console.log(`${nr1} % ${nr2} = ${result1}`);

// let nr1 = 4;

// console.log(++nr1 + ++nr1);
// console.log(nr1);

//Practise exercise 2.3

// alert("enter the sizes of the sides of a right angle triangle and i will caluculate the hypotenuse for you");
// let side1 = Number(prompt("what is the size of the one side?"));
// let side2 = Number(prompt("what is the size of the second side?"));
// let side3Squared = (side1 **2) + (side2 **2);
// let hypotenuse = Math.sqrt(side3Squared);
// alert(`The hypotenuse is ${hypotenuse}`);

let a = 2;
let b = 4;
let c = 6;
a += b;
a /= c;
c %= b;
console.log(a,b,c);

