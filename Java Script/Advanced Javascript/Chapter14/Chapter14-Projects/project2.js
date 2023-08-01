// Get references to the relevant HTML elements
const endDate = document.querySelector("input[name='endDate']");
const clock = document.querySelector(".clock");

// Initialize some variables
let timeInterval;
let timeStop = true;

// Retrieve the saved countdown value from localStorage or set it to false if not found
const savedValue = localStorage.getItem("countdown") || false;

// If a saved value exists, start the clock with the saved value and set the input field to the saved value
if (savedValue) {
    startClock(savedValue);
    let inputValue = new Date(savedValue);
    endDate.valueAsDate = inputValue;
}

// Listen for changes in the input field (when the user selects a new end date)
endDate.addEventListener("change", function (e) {
    e.preventDefault();
    // Clear any previous intervals that were running
    clearInterval(timeInterval);
    // Parse the new end date from the input field
    const temp = new Date(endDate.value);
    // Store the new end date in localStorage
    localStorage.setItem("countdown", temp);
    // Start the clock with the new end date
    startClock(temp);
    // Set timeStop to true to indicate that the countdown is active
    timeStop = true;
});

// Function to start the countdown timer with the provided end date (d)
function startClock(d) {
    function updateCounter() {
        // Calculate the time left between the current date and the provided end date (d)
        let tl = timeLeft(d);
        // If the total time left is zero or negative, set timeStop to false to indicate the countdown is finished
        if (tl.total <= 0) {
            timeStop = false;
        }
        // Update the countdown display on the page with the remaining time
        for (let pro in tl) {
            let el = clock.querySelector("." + pro);
            if (el) {
                el.innerHTML = tl[pro];
            }
        }
    }
    // Call updateCounter immediately to show the initial countdown display
    updateCounter();
    // If timeStop is true (countdown is active), set up an interval to update the countdown display every second
    if (timeStop) {
        timeInterval = setInterval(updateCounter, 1000);
    } else {
        // If timeStop is false (countdown is finished), clear any existing intervals
        clearInterval(timeInterval);
    }
}

// Function to calculate the time left between the current date and the provided end date (d)
function timeLeft(d) {
    let currentDate = new Date();
    let t = Date.parse(d) - Date.parse(currentDate);
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        "total": t,
        "days": days,
        "hours": hours,
        "minutes": minutes,
        "seconds": seconds
    };
}
