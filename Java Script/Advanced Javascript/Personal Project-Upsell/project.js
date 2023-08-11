let myForm = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let errors = document.querySelectorAll(".error")
let required = ["email", "password"];

myForm.addEventListener("submit", validation);

function validation(e) {
    let data = {};
    e.preventDefault();

    errors.forEach(function (item) {
        item.classList.add("hide");
    });

    let error = false;

    inputs.forEach(function (el) {
        let tempName = el.getAttribute("name");


        if (tempName != null) {
            el.style.borderColor = "ddd";

            if (el.value.length == 0 && required.includes(tempName)) {
                addError(el, "Required Field", tempName);
                error = true;
            }

            if (tempName === "email") {
                let exp = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
                let result = exp.test(el.value);

                if (!result) {
                    addError(el, "invalid email", tempName);
                    error = true;
                }
            }
            if (tempName === "password") {
                let exp = /[A-Za-z0-9]+$/;
                let result = exp.test(el.value);
                if (!result) {
                    addError(el, "numbers and letters only", tempName)
                    error = true;
                }
                if (!(el.value.length > 3 && el.value.length < 9)) {
                    addError(el, "must be more than 3 letters and less than 9 letters",tempName);
                    error = true;
                }

            }


            data[tempName] = el.value;
        }
    });

    if (!error) {
        myForm.submit();
    }
}



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





