// Define an anonymous function assigned to the variable `app`.
let app = function () {
    // Select the elements with class names "val1", "val2", "output", and "input" and store them in variables.
    let val1 = document.querySelector(".val1");
    let val2 = document.querySelector(".val2");
    let output = document.querySelector(".output");
    let answer = document.querySelector("input");
    let game = {}; // An empty object to store game-related data.

    // Function to initialize the app.
    function init() {
        // Add a click event listener to the button element and execute the `checker` function.
        document.querySelector("button").addEventListener('click', checker);

        // Load the first question.
        loadQuestion();
    }

    // Function to generate a random value between `min` and `max`.
    function ranValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // Function to load a new question with random values for `val1`, `val2`, and the correct `answer`.
    function loadQuestion() {
        game.val1 = ranValue(1, 100);
        game.val2 = ranValue(1, 100);
        game.answer = game.val1 + game.val2;
        val1.textContent = game.val1;
        val2.textContent = game.val2;
    }

    // Function to check the user's answer and display the result.
    function checker() {
        let bg = answer.value == game.answer ? "green" : "red";
        output.innerHTML +=
            `<div style="color:${bg}">${game.val1} +
        ${game.val2} = ${game.answer} (${answer.value})
        </div>`;
        answer.value = ""; // Clear the input field.
        loadQuestion();    // Load a new question for the next round.
    }

    // Return an object with the `init` function as the only accessible method from outside the `app` function.
    return {
        init: init
    };
}();

// After the DOM content has loaded, initialize the app by calling the `init` method.
document.addEventListener('DOMContentLoaded', app.init);
