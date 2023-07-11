/* 
Conditionals
There are two forms of conditional statements in JavaScript: if
statements and if...else statements. An if statement is used to
execute a piece of code if something is true. For example, if you’ve
been good, you get a treat. An if...else statement executes one
piece of code if something is true and another if not. For example,
if you’ve been good, you get a treat; else, you get grounded.
if Statements
The if statement is the simplest of JavaScript’s control structures.
It’s used to run code only if a condition is true.
*/

/*First, at u we create a variable called name and set its value
to the string "Nicholas". Then we use console.log to log the string
"Hello Nicholas".
At w we use an if statement to check whether the length of
name is greater than 7. If it is, the console will display "Wow, you have
a REALLY long name!", using console.log at.
As Figure 6-1 shows, an if statement has two main parts: the
condition and the body. The condition should be a Boolean value.
The body is one or more lines of JavaScript code, which are exe-
cuted if the condition is true
 - BELOW */

/*
let fname = "Nick";
console.log("Hello", fname);

if (fname.length > 7) {
    console.log("wow you have a really long name!");
}else {
    console.log("wow your name isnt very long");
}
*/

/* 
Chaining if…else Statements
Often we need to check a sequence of conditions and do something
when one of them is true. For example, say you’re ordering Chinese
food and you’re choosing what to eat. Your favorite Chinese dish
is lemon chicken, so you’ll have that if it’s on the menu. If it’s
not, you’ll have beef with black bean sauce. If that’s not on the
menu, you’ll have sweet and sour pork. In the rare case that none
of those options is available, you’ll have egg fried rice, because you
know all the Chinese restaurants you go to will have that. - BELOW
*/

/*
let lemonChicken = false;
let beefWithBlackBean = false;
let sweetAndSourPork = false;

if (lemonChicken) {
    console.log("Great! I'm having lemon chicken!");
} else if (beefWithBlackBean) {
    console.log("I'm having the beef.");
} else if (sweetAndSourPork) {
    console.log("OK, I'll have the pork.");
} else {
    console.log("Well, I guess I'll have rice then.");

}
*/

/*let fname = prompt("What is your name?")

if (fname) {
    if (fname.toLowerCase() === "Mitch") {
        alert("hello me");
    } else {
        alert("Hello stranger");
    }
}
*/

/*
let viewerAge = prompt("how old are you?")
    if (viewerAge >= 18) {
        alert("enjoy the movie");
    } else {
        alert("Not happening!");
    }
    */

//While loops!!! 
/* As we’ve seen, conditionals allow you to run a piece of code
once if a condition is true. Loops, on the other hand, allow you to
run a piece of code multiple times, depending on whether a condi-
tion remains true. */

/*
let countDown = 10;
while (countDown > 0) {
    alert(countDown);
    countDown--;
}
    alert("Take off!");
    */

/*
let timesToSayHello = 20;
for (let i = 0; i < timesToSayHello; i++) {
console.log("Hello!");
}
*/

//FOR LOOPS!!
/*for loops make it easier to write loops that create a variable, loop
until a condition is true, and update the variable at the end of
each turn around the loop. When setting up a for loop, you create
a variable, specify the condition, and say how the variable should
change after each cycle—all before you reach the body of the loop.
*/

/*
let animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];
 for (let i = 0; i < animals.length; i++) {
    console.log("this zoo contains a " + animals[i] + ".");

}


let people = ["pete", "Carl", "Dave", "Richard"];
 for (let i = 0; i < people.length; i++) {
    console.log("this class contains " + people[i] + ".");

}
*/

/*
let fname = "Mitch";
for (let i = 0; i < fname.length; i++) {
console.log("These are the letters " + fname[i]);
}
*/


/*for ( let x=2; x < 10000; x = x * 2) {
    console.log(x);
}
*/

/* let animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];
for (let i = 0; i < animals.length; i++) {
       animals[i] = "awesome " + animals[i];
       

}
console.log(animals);
*/


/*
et i = 0;
let randomString = "";
let alphabet = "abcdefghijklmnopqrstuvwxyz";
while (i < 6) {
    randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
    i++;
}
console.log(randomString);
*/

/* challange:
#3: h4ck3r sp34k
Turn text into h4ck3r sp34k! A lot of people on the Internet
like to replace certain letters with numbers that look like
those letters. Some numbers that look like letters are 4 for
A, 3 for E, 1 for I, and 0 for O. Even though the numbers look
more like capital letters, we’ll be replacing the lowercase
versions of those letters. To change normal text to h4ck3r
sp34k, we’ll need an input string and a new empty string:
var input = "javascript is awesome";
var output = "";
You’ll then need to use a for loop to go through all the
letters of the input string. If the letter is "a", add a "4" to the
output string. If it’s "e", add a "3". If it’s "i", add a "1", and
if it’s "o", add a "0". Otherwise, just add the original letter
to the new string. As before, you can use += to add each new
letter to the output string.
After the loop, log the output string to the console. If it
works correctly, you should see it log "j4v4scr1pt 1s 4w3s0m3". */


let input = "javascript is awesome";
let output = "";
for (i = 0; i < input.length; i++) {
    if (input[i] === "e") {
        output += "3";

    } else if (input[i] === "i") {
        output += "1";
    } else if (input[i] === "0") {
        output += "0";

    } else if (input[i] === "a") {
        output += "4";

    } else {
        output += input[i];
    }
    


}
console.log(output);








