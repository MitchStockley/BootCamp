//Hangman Game

//Choosing a Random Word
//The first thing we have to do is to choose a random word. Here’s
//how that will look:

let words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
]

//we use Math.random and Math.floor to pick a random word from the array,

let word = words[Math.floor(Math.random() * words.length)];

// Creating the Answer Array
// Next we create an empty array called answerArray and fill it with
// underscores (_) to match the number of letters in the word.

let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
let remainingLetters = word.length;
let guess
let numOfGuesses = word.length * 2;
while ((remainingLetters > 0) && (numOfGuesses > 0)) {
    alert(answerArray.join(" "));
    guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if (guess === null) {
        break;
    } else if (guess.length > 1) {
        alert("Please enter a single letter");
    } else {
        // check to see if they guess correctly
        guess = guess.toLowerCase();
        numOfGuesses--;
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                if (answerArray[j] === "_") {
                    answerArray[j] = guess;
                    remainingLetters--;
                } else {
                    alert("You have already guessed that letter");
                }
            }
        }



    }
}
if (guess === null) {
    alert("Try next time");
} else if ((numOfGuesses === 0) && (remainingLetters > 0)) {
    alert("You ran out of guesses");

}


else {
    alert("Congratulations!");
}