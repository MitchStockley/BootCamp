//Email extractor

// Select the first textarea element with the name "txtarea" and store it in the variable `area1`.
let area1 = document.querySelector("textarea[name='txtarea']");

// Select the second textarea element with the name "txtarea2" and store it in the variable `area2`.
let area2 = document.querySelector("textarea[name='txtarea2']");

// Select the button element and store it in the variable `button`.
let button = document.querySelector("button");

// Add a click event listener to the button element.
button.addEventListener("click", checkIt);

// Function to be executed when the button is clicked.
function checkIt() {
    // Get the content of the first textarea (txtarea) and store it in the variable `txt`.
    const txt = area1.value;

    // Use a regular expression to find email addresses in the `txt` content and store them in the array `eData`.
    const eData = txt.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);

    // Create an empty array `counter` to store unique email addresses.
    let counter = [];

    // Loop through each email address in the `eData` array.
    for (let x = 0; x < eData.length; x++) {
        // Check if the email address is not already present in the `counter` array.
        if (counter.indexOf(eData[x]) == -1) {
            // If it's not present, add it to the `counter` array to keep track of unique email addresses.
            counter.push(eData[x]);
        }
    }

    // Set the content of the second textarea (txtarea2) to a comma-separated string of unique email addresses.
    area2.value = counter.join(',');
}

