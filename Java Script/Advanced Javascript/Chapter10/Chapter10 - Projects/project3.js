//Hangman game


// Define the game object with initial properties.
const game = {
    cur: "",            // The current word being played.
    solution: "",       // The solution to the current word (array of letters).
    puzz: [],           // Array to hold references to DOM elements representing puzzle letters.
    total: 0            // Total number of letters left to solve in the puzzle.
};

// An array containing words to be used as puzzles in the game.
const myWords = ["learn Javascript", "learn html", "learn css"];

// DOM elements obtained from the HTML file.
const score = document.querySelector(".score");    // Element to display the score.
const puzzle = document.querySelector(".puzzle");  // Element to display the puzzle word.
const letters = document.querySelector(".letters");// Element to display selectable letters.
const btn = document.querySelector("button");      // Button to start the game.

// Adds a click event listener to the "Start Game" button.
btn.addEventListener("click", startGame);

// Function to start a new game.
function startGame() {
    if (myWords.length > 0) {
        btn.style.display = "none";            // Hides the "Start Game" button.
        game.puzz = [];                        // Clear the puzzle letter array.
        game.total = 0;                        // Reset the total count of unsolved letters.
        game.cur = myWords.shift();            // Get the next word from the myWords array.
        game.solution = game.cur.split("");    // Convert the word into an array of letters.
        builder();                            // Build the puzzle with the new word.
    } else {
        score.textContent = "No More Words."; // If no more words are left, display a message.
    }
}

// Function to create and append elements to the DOM.
function createElements(elType, parentEle, output, cla) {
    const temp = document.createElement(elType); // Creates the specified element type.
    temp.classList.add("boxE");                  // Add the "boxE" class to the element.
    parentEle.append(temp);                      // Appends the element to the parent element.
    temp.textContent = output;                   // Sets the content of the element.
    return temp;                                 // Return the created element.
}

// Function to update the score display and check if the game is over.
function updateScore() {
    score.textContent = `Total Letters Left : ${game.total}`;
    if (game.total <= 0) {
        console.log("game over");               // Log "game over" to the console.
        score.textContent = "Game Over";        // Update the score display with "Game Over".
        btn.style.display = "block";            // Show the "Start Game" button again.
    }
}

// Function to build the puzzle for the current word.
function builder() {
    letters.innerHTML = "";                    // Clear the letters display.
    puzzle.innerHTML = "";                     // Clear the puzzle display.

    // Loop through each letter in the solution array.
    game.solution.forEach((lett) => {
        let div = createElements("div", puzzle, "-", "boxE"); // Create a div element.

        if (lett == " ") {
            div.style.borderColor = "white";    // For spaces, change the border color to white.
            div.textContent = " ";             // Set the content of the div to a space.
        } else {
            game.total++;                      // Increments the count of unsolved letters.
        }

        game.puzz.push(div);                   // Adds the div element to the puzzle array.
        updateScore();                         // Update the score display.
    })

    // Loop to create selectable letter boxes for A to Z.
    for (let i = 0; i < 26; i++) {
        let temp = String.fromCharCode(65 + i); // Gets the letter corresponding to the loop index.
        let div = createElements("div", letters, temp, "box"); // Creates a div element.

        // Adds a click event listener to each letter box.
        let checker = function (e) {
            div.style.backgroundColor = "#ddd"; // Changes background color when clicked.
            div.classList.remove("box");        // Removes the "box" class. 
            div.classList.add("boxD");          // Add the "boxD" class (selected letter style).
            div.removeEventListener("click", checker); // Remove the click event listener.
            checkLetter(temp);                  // Call the checkLetter function with the selected letter.
        }

        div.addEventListener("click", checker); // Add the click event listener to the letter box.
    }
}

// Function to check if the selected letter is present in the solution.
function checkLetter(letter) {
    console.log(letter); // Log the selected letter to the console.

    // Loop through each letter in the solution array.
    game.solution.forEach((ele, index) => {
        if (ele.toUpperCase() == letter) {     // If the letter matches the selected letter (case-insensitive).
            game.puzz[index].textContent = letter; // Reveal the letter in the puzzle display.
            game.total--;                      // Decrement the count of unsolved letters.
            updateScore();                     // Update the score display.
        };
    });
}
