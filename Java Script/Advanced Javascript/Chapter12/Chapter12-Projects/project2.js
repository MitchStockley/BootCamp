// Form Validator

/*This project is an example of a typical form structure where you check the values
inputted into the form and validate them before the content gets submitted. A
response is returned to the user if the values do not meet the validation criteria in the
code. */



// Select the form element and store it in the variable `myForm`.
const myForm = document.querySelector("form");

// Select all input elements and store them in the variable `inputs`.
const inputs = document.querySelectorAll("input");

// Select all elements with the class "error" and store them in the variable `errors`.
const errors = document.querySelectorAll(".error");

// Define an array of field names that are required to be filled out.
const required = ["email", "userName"];

// Add a submit event listener to the form element.
myForm.addEventListener("submit", validation);

// Function to be executed when the form is submitted.
function validation(e) {
    // Create an empty object to store form data.
    let data = {};

    // Prevent the default form submission behavior.
    e.preventDefault();

    // Hide all error messages.
    errors.forEach(function (item) {
        item.classList.add("hide");
    });

    // Initialize an error flag.
    let error = false;

    // Loop through each input element in the form.
    inputs.forEach(function (el) {
        // Get the name attribute of the input element.
        let tempName = el.getAttribute("name");

        // Check if the input element has a name attribute.
        if (tempName != null) {
            el.style.borderColor = "#ddd"; // Reset the border color.

            // Check if the input is empty and is a required field.
            if (el.value.length == 0 && required.includes(tempName)) {
                addError(el, "Required Field", tempName); // Show an error message.
                error = true; // Set the error flag to true.
            }

            // Check specific validations based on field name.
            if (tempName === "email") {
                let exp = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
                let result = exp.test(el.value);
                if (!result) {
                    addError(el, "Invalid Email", tempName);
                    error = true;
                }
            }

            if (tempName == "password") {
                let exp = /[A-Za-z0-9]+$/;
                let result = exp.test(el.value);
                if (!result) {
                    addError(el, "Only numbers and Letters", tempName);
                    error = true;
                }
                if (!(el.value.length > 3 && el.value.length < 9)) {
                    addError(el, "Needs to be between 3-8 characters", tempName);
                    error = true;
                }
            }

            // Store the form data in the `data` object using the field name as the key and the input value as the value.
            data[tempName] = el.value;
        }
    });

    // If there are no errors, submit the form programmatically.
    if (!error) {
        myForm.submit();
    }
}

// Function to display an error message for the input element.
function addError(el, mes, fieldName) {
    // Get the next sibling element of the input element.
    let temp = el.nextElementSibling;
    // Remove the "hide" class to display the error message.
    temp.classList.remove("hide");
    // Set the content of the error message to include the field name and the provided error message.
    temp.textContent = fieldName.toUpperCase() + " " + mes;
    // Set the border color of the input element to red.
    el.style.borderColor = "red";
    // Set focus on the input element.
    el.focus();
}
