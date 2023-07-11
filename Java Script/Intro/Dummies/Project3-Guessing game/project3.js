let rulesButton = document.getElementById("gameRules");
rulesButton.addEventListener("click", rules);

let gameButton = document.getElementById("playGame");
gameButton.addEventListener("click", playGame);

let secret;
let userGuess;
let previousGuesses = [];



function playGame() {
    secret = Math.floor(Math.random() * 10);
    previousGuesses = [];

    while (true) {
        let answer = prompt("Please guess the secret number between 1-10");

        if (answer === null) {
            alert("Game canceled. Thanks for playing!");
            break;
        }

        userGuess = parseInt(answer);

        if (previousGuesses.includes(userGuess)) {
            alert("You have already guessed that number. Please try again.");
            continue;
        }

        previousGuesses.push(userGuess);

        if (userGuess === secret) {
            alert("Correct! You guessed the secret number.");
            break;
        } else if (userGuess > secret) {
            alert("Incorrect - That guess was too high");
        } else {
            alert("Incorrect - That guess was too low");
        }
    }
}

function rules() {
    alert("You have to pick a random number between 1-10.");
}


