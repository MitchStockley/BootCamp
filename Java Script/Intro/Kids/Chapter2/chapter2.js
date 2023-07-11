/*console.log(99*123);
console.log("This is a long string".slice(0, 4));
console.log(22 + 33 + 44);
console.log(1000 - 17);
console.log(123 * 456);
console.log(12345 / 250);
console.log((1234 + 57) * 3 - 31 / 4);
console.log(8 / 1 + 3);
console.log(8 / (1 + 3));
console.log((15+9) *2);
let nam = "Mitch";
let age = "12";
console.log(nam);
console.log(age);
age = 13;
console.log(age);
let numOfSiblings = 1 + 3;
let numOfCandles = 8;
console.log( "My answer is " , numOfCandles / numOfSiblings);

//works out seconds in a hour
let secondsInAMinute = 60;
let minutesInAnHour = 60;
let secondsInAnHour = secondsInAMinute * minutesInAnHour;
console.log(secondsInAnHour);

//works out seconds in a day
let hoursInADay = 24;
let secondsInADay = secondsInAnHour * hoursInADay;
console.log(secondsInADay);

//works out seconds in a year
let daysInAYear = 365;
let secondsInAYear = secondsInADay * daysInAYear;
console.log(secondsInAYear);

age = 27
//works out seconds in 27 years (my age)
console.log(" I am " , secondsInAYear * age , "seconds old");

//Incrementing
let highFives = 0;
++ highFives;
console.log(highFives);

highFives = 0;
console.log(highFives ++);
console.log(highFives);

highFives = 2;
console.log(--highFives + 4);

//let x = 10;
//x += 5;
//console.log(x);

let score = 10;
score += 7;
score -+ 5;
console.log(score);

//let balloons = 100;
//balloons *= 2;
//console.log(balloons);

//let balloons = 100;
//balloons /= 4;
//console.log(balloons);

let numberNine = 9;
let stringNine = "9";
console.log(numberNine + numberNine);
console.log(numberNine + stringNine);

//let greeting = "Hello ";
//let myName = "Mitch";
//console.log(greeting + myName);

//Finding the length of a string
let stringLengthExample = "hduehdjenhhhhhhhhhhhjhgjkkkkkkkkhhhhhhh";
console.log(stringLengthExample.length);

let myName = "Mitch";
//console.log(myName[0]);
console.log(myName[myName.length -1]);
console.log(stringLengthExample.indexOf("e"));

let codeWord1 = "School";
let codeWord2 = "Straight";
let codeWord3 = "under";
let codeWord4 = "card";
let codeWord5 = "yellow";
let code = (codeWord1[0] + codeWord2[1] + codeWord3[0] + codeWord4[3] +codeWord5[0]);
console.log(code);

//let longString = "My long string is long";
//console.log(longString.slice(3, 14));
//console.log(longString.slice(0 , 7));
//let longString = "My long string is long";
//console.log(longString.indexOf("s"));
//console.log(longString.slice(8,))
//console.log(longString.toUpperCase());

//let upperCaseExample = "Hello there, how are you doing?"
//console.log(upperCaseExample.toUpperCase());

//let upperCaseExample2 = "hELlo THERE, hOW ARE yOu doINg?";
//console.log(upperCaseExample2.toLowerCase());

// This code changes everything to lower case and then changes the first letter to upper case. 
//let x = "hELlo THERE, hOW ARE yOu doINg?";
//x = x[0].toUpperCase() + x.slice(1,).toLowerCase();
//console.log(x);

//let hasShower = true;
//let hadBackPack = false;
//let goToSchool = hadBackPack && hasShower;
//console.log(goToSchool);

//let hasApple = true;
//let hasOrange = false;
//let goToSchool = hasApple || hasOrange;
//console.log(goToSchool);

//let isWeekend = false;
//console.log("Need to shower today?", !isWeekend);

/*let isWeekend = confirm("is it the weekend?");
let hadShower = confirm("Have you had a shower?");
let hasApple = confirm("have you had an apple?");
let hasOrange = confirm("have you had a orange?");
let shouldGoToSchool = !isWeekend && hadShower &&(hasApple || hasOrange);
alert("Should go to school? " + shouldGoToSchool); 

let height = prompt("What is your height?");
let heightRestriction = 60;
alert("is allowed on the ride? " + (height >= heightRestriction));


let height = prompt("What is your height?");
let heightRestriction = 48;
alert("is allowed on the ride? " + (height <= heightRestriction));
*/

/*let mySecretNumber = 6;
let chicoGuess = 4;
alert("is chicos guess correct? " + (chicoGuess === mySecretNumber));

let grouchoGuess = 6;
alert("is grouchos guess correct? " + (grouchoGuess === mySecretNumber));
*/

//let mySecretNumber = 7;
//let guess = prompt("what is your guess?")
//alert("Did you guess correct?" + (mySecretNumber == guess));

//let stringNumber = "5";
//let actualNumber = 5;
//console.log(stringNumber === actualNumber);
//console.log(stringNumber == actualNumber);

let age = prompt("What is your age?");
let accompanied = confirm("are you accompanied by an adult?")
alert("is allowed to watch the movie? " + (age >= 13 || accompanied));






































