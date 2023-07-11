

//  function ourFirstFunction() {
//      alert("Hello world");
//  }

// ourFirstFunction();

// function sayHello(name) {
//     console.log("Hello ", name)


// }

// sayHello("Mitch");

// function drawCats(howManyTimes, whatToDraw) {

//     for(let i = 0; i < howManyTimes; i++) {
//         console.log(i, whatToDraw);
//     }
// }

// drawCats(15, "80085");

// function double(number) {

//     return number*2;
// }
// let answer = (double(8) + double(10));
// console.log(answer);

// function cars(m,c) {
//    let car = { "model" : m, "colour" : c}
//    return car;
// }

// let myCar = cars("Audie", "black");
// alert(Object.values(myCar));

// function code(l,p) {
//     let codes = { "language" : l, "programe" : p}
//     return codes;
// }

// let myCodes = code("HTML", "intro to programming");
// alert(myCodes.language + "-" + myCodes.programe + " is a fun coarse");



// let randomWords = ["Planet", "Worm", "Flower", "Computer"];
// let words = pickRandomWords(randomWords);
// console.log(words);




// let randomBodyParts = ["Face", "Nose", "Hair"];
// let randomAdjectives = ["Smelly", "Boring", "Stupid"];
// let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
// // Pick a random body part from the randomBodyParts array:
// let randomBodyPart = pickRandomWords(randomBodyParts);
// // Pick a random adjective from the randomAdjectives array:
// let randomAdjective = pickRandomWords(randomAdjectives);
// // Pick a random word from the randomWords array:
// let randomWord = pickRandomWords(randomWords);
// // Join all the random strings into a sentence:
// let randomString = "Your " + randomBodyPart + " is like a " + 
// randomAdjective + " " + randomWord + "!!!";
// console.log(randomString);

// function pickRandomWords(words) {
//     return words[Math.floor(Math.random() * words.length)]
//     }

// function fifthLetter(name) {
//     if (length.name < 5) {
//         return "Your name is too short";
//     }

//     return ("The fifth letter of your name is " + name[4]);
// }

// let username = prompt("What is your name?");
// alert(fifthLetter(username));


// function medalForScore(score) {
//     if (score < 3) {
//         return "Bronze";
//     }

//     if (score < 7) {
//         return "Silver";
//     }
//         return "Gold";
// }

// console.log(medalForScore(3));

// function add(x,y) {
//     return x + y;
// }

// function multiply(x,y) {
//     return x * y;
// }

// let result = add(multiply(36325,9824),777);
// console.log(result);



// function areArraysSame(sequence1, sequence2) {
//     if (sequence1.length !== sequence2.length) {
//         return "false";
//     }

//     for (let i = 0; i < sequence1.length; i++) {
//         if (sequence1[i] !== sequence2[i]) {
//             return "false";
//         }
//     }
//     return "true";
// }


// console.log(areArraysSame([1, 2, 3], [4, 5, 6]));
// console.log(areArraysSame([1, 2, 3], [1, 2, 3]));
// console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));


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