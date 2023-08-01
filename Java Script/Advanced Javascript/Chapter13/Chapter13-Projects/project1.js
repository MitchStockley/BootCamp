// Array of valid passwords.
let words = ["java", "software", "developer", "nodejs"];


// Function to check if the provided `pass` exists in the `words` array.
function checker(pass) {
    return words.includes(pass);
}

// Function to login using a password and return a promise.
function login(password) {
    return new Promise((resolve, reject) => {
        // Check if the password is valid using the `checker` function.
        if (checker(password)) {
            resolve({ staus: true }); // Resolve the promise with a success status.
        } else {
            reject({ staus: false }); // Reject the promise with a failure status.
        }
    });
}

// Function to check the password and log the result using Promises.
function otherChecker(pass) {
    login(pass)
        .then(token => {
            // The promise was resolved, and the password is valid.
            console.log("Approved");
            console.log(token); // Display the token object with the status as `true`.
        })
        .catch(value => {
            // The promise was rejected, and the password is invalid.
            console.log("Reject");
            console.log(value); // Display the value object with the status as `false`.
        });
}

// Call `otherChecker` function with "java" and "1234" as passwords for testing.
otherChecker("javas"); // Will log "Approved" and the token object with the status as `true`.
otherChecker("software"); // Will log "Reject" and the value object with the status as `false`.
