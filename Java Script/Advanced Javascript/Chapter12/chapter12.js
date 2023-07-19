// //Regular expressions

// let text = "I love JavaScript!";
// console.log(text.match(/javascript/)); //.match() - used to compare to see if values are the same 

// //Specifying multiple options for words

// let text2 = "I love JavaScript!";
// console.log(text2.match(/javascript|nodejs|react/i))

// //"g" at the end makes it global and finds all matches

// let text3 = "I love React and JavaScript!";
// console.log(text3.match(/javascript|nodejs|react/gi));

// //Character options

//let text4 = "d";
// console.log(text4.match(/[abc]/gi)); //This will return null because d is not a, b, or c.

// //This example includes "d"

// console.log(text4.match(/[abcd]/));

// //if we wanted any letter, lowercase or uppercase, we would write this:

// let text5 = "t";
// console.log(text5.match(/[a-zA-Z]/)); //checks for lower and upper case

// //If we wanted to include numbers as well, we would write:

// let text6 = "3";
// console.log(text6.match(/[a-zA-Z0-9]/));

// //To address the difficulty of complex characters not matching an expression, the dot
// //functions as a special wildcard character in regex that can match any character.

// let text7 = "äé!";
// console.log(text7.match(/[a-zA-Z0-9]/));
// console.log(text7.match(/./g));

// //If we escape the d, \d, it matches any digit. We are doing a global search so it will
// //specify any digit.

// let text8 = "I'm 29 years old.";
// console.log(text8.match(/\d/g));

// //We can also escape the s, \s, which matches all whitespace characters:

// let text9 = "Coding is a lot of fun!";
// console.log(text9.match(/\s/g));
// //The above example will just return a few spaces, but tabs and other types of
// //whitespace are also included:

// //A very useful one is \b, which matches text only when it's at the beginning of a word.
// //So, in the following example, it is not going to match the instances of in in beginning:

// let text10 = "In the end or at the beginning?";
// console.log(text10.match(/\bin/gi));

// //Groups
// //There are many reasons to group your regex. Whenever you want to match a group
// // of characters, you can surround them with parentheses. 

// let text11 = "I love JavaScript! He dislikes spiders";
// console.log(text11.match(/(love|dislikes)\s(javascript|spiders)/gi));

// // if we want to match any four alphanumeric characters in a sequence, we could just write this:

// let text12 = "I love JavaScript!";
// console.log(text12.match(/[a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9]/g));

// //This looks for a g character that may or not may be preceded by an n

// let text13 = "You are doing great!";
// console.log(text13.match(/n?g/gi));

//This is going to match for the group 123 one or more times. And since this string is
//present, it will find a match. 

// let text = "123123123";
// console.log(text.match(/(123)+/));

// let text = "abcabcabc";
// console.log(text.match(/(abc){1,2}/));

//In order to
// specify groups, we'll have to name them. Here's an example of how to do it:

// let text = "I love JavaScript!";
// console.log(text.match(/(?<language>javascript)/i));

//Practical regex

//Searching and replacing strings

// let text = "That's not the case.";
// console.log(text.search(/Case/i)); //search returns an index 

// let text = "Coding is fun. Coding opens up a lot of opportunities.";
// console.log(text.replace("Coding", "JavaScript")); //relaces "coding" with javascript"

//this option uses g to change all of the words "coding"
// let text = "Coding is fun. Coding opens up a lot of opportunities.";
// console.log(text.replace(/Coding/g, "JavaScript"));

//Email validation
// In order to create a regex pattern, we need to be able to describe the pattern with
// words first. Email addresses consist of five parts, in the form of [name]@[domain].
// [extension].

let emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
let validEmail = "maaike_1234@email.com";
let invalidEmail = "maaike@mail@.com";
console.log(validEmail.match(emailPattern));
console.log(invalidEmail.match(emailPattern));

