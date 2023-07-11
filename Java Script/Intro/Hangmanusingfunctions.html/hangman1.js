//functions to make the code work. 



let guess;
let words = ["javascript", "monkey", "amazing", "pancake"];
let word = pickWord();
let answerArray = [];
setupAnswerArray();
let numOfGuesses = word.length;

let remainingLetters = word.length;
while (remainingLetters > 0 && numOfGuesses > 0) {
    showPlayerProgress();
    alert("num of guesses remaining: " + numOfGuesses);
    guess = getGuess();
    if (guess === null) {
        break;
    } else {
        updateGameState();
    }
    
}
showAnswerAndCongratulatePlayer();



//functions to make the code work. 

function pickWord() {
    // Return a random word
    return words[Math.floor(Math.random() * words.length)];
};

function setupAnswerArray() {
    // Return the answer array
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }

};
function showPlayerProgress() {
    // Use alert to show the player their progress
    alert(answerArray.join(" "));
};

function getGuess() {
    // Use prompt to get a guess
    return prompt("Give us a guess");
};
function updateGameState() {
    // Update answerArray and return a number showing how many
    // times the guess appears in the word so remainingLetters
    // can be updated
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



};

function showAnswerAndCongratulatePlayer() {
    // Use alert to show the answer and congratulate the player
    if (guess === null) {
        alert("You quit");
    } else if (numOfGuesses === 0 && remainingLetters > 0) {
        alert("You an out of guesses");
    } else {
        alert("Congrats")
    }
       
    
    
};