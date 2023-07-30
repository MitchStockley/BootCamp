//Interactive voting system

/*
The below code will create a dynamic list of people that can be clicked, and it will
update the corresponding value with the number of times that name was clicked. It
also includes an input field that will allow you to add more users to the list, each of
which will create another item in the list that can be interacted with the same as the
default list items
 */


// Execute the 'build' function when the window loads
window.onload = build;

// Define an array of names
let myArray = ["Mitch", "Chad", "Storm", "Kim", "Lauren"];

// Get references to HTML elements by their IDs
let message = document.getElementById("message");   
let addFriend = document.getElementById("addFriend"); 
let addNew = document.getElementById("addNew");   
let output = document.getElementById("output");  

// Adds a click event handler to the "Add" button (with the ID "addNew")
addNew.onclick = function () {
    // Get the value entered in the input field (with the ID "addFriend")
    let newFriend = addFriend.value;

    // Calls the 'adder' function with the new friend's name, the length of the 'myArray', and a counter of 0
    adder(newFriend, myArray.length, 0);

    // Add the new friend's name to the 'myArray' array
    myArray.push(newFriend);
}

// This function is called when the window loads
function build() {
    // Loops through each item in the 'myArray' array
    myArray.forEach((item, index) => {
        // Calls the 'adder' function for each item in the array, passing the name, index, and a counter of 0
        adder(item, index, 0)
    });
}

// This function adds a new row to the 'output' container with information about the friend
function adder(name, index, counter) {
    // Create new table row (tr) element
    let tr = document.createElement("tr");

    // Create new table data (td) elements
    let td1 = document.createElement("td");
    td1.classList.add("box"); // Add the "box" class to the first td element
    td1.textContent = index + 1; // Display the index (1-based) of the friend

    let td2 = document.createElement("td");
    td2.textContent = name; // Display the friend's name

    let td3 = document.createElement("td");
    td3.textContent = counter; // Display the counter value (always 0 in this case)

    // Appends the td elements to the tr element
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);

    // Add a click event handler to the row (tr) element
    tr.onclick = function () {
        console.log(tr.lastChild); // Log the last td element (with the counter value)
        let val = Number(tr.lastChild.textContent); // Convert the counter value to a number
        val++; // Increment the counter value
        tr.lastChild.textContent = val; // Update the last td element with the new counter value
    }

    // Append the row (tr) element to the 'output' container
    output.appendChild(tr);
}
