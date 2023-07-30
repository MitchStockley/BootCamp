//click me game 

// Selects the element with class name "output" and store it in the variable `output`.
let output = document.querySelector(".output");
let message = document.querySelector(".message");

// Set the initial text content of the "message" element to "Press to start".
message.textContent = "Press to start";

// Create a new div element and assign it to the variable `box`.
let box = document.createElement('div');

// Create an object `game` to store game-related data.
let game = { 
    timer: 0,    // Store the timer ID for the setTimeout function.
    start: null  // Store the timestamp when the game starts.
};

// Add the "box" class to the `box` element.
box.classList.add('box');

// Appends the `box` element to the "output" element.
output.append(box);

// Add a click event listener to the `box` element.
box.addEventListener('click', (e) => {
    // When the box is clicked, clear its content and hide it.
    box.textContent = "";
    box.style.display = 'none';
    
    // Set a timer using setTimeout to call the `addBox` function after a random duration (up to 3 seconds).
    game.timer = setTimeout(addBox, ranNum(3000));

    // Check if the game has already started.
    if (!game.start) {
        message.textContent = "Loading"; // If not, display "Loading" message.
    } else {
        // If the game has already started, calculate the time taken to click the box.
        let cur = new Date().getTime();
        let dur = (cur - game.start) / 1000; // Calculate the time difference and converts to seconds.
        message.textContent = `It took ${dur} seconds to click`; // Display the time taken.
    }
});

// Function to add the box to the screen.
function addBox() {
    message.textContent = "click it"; // Display "click it" message.
    game.start = new Date().getTime(); // Record the current timestamp as the game start time.
    box.style.display = 'block'; // Show the box.
    box.style.left = ranNum(450) + 'px'; // Randomly position the box horizontally.
    box.style.top = ranNum(450) + 'px';  // Randomly position the box vertically.
}

// Function to generate a random number up to the provided `max` value.
function ranNum(max) {
    return Math.floor(Math.random() * max);
}
