
// // shows how to start the
// event listener for the print button. Create a refer-
// ence to the Print button element and store
// it in the new variable, like this

let printButton = document.getElementById("printable");
printButton.addEventListener("click", printView);

let addButton = document.getElementById("addIt");
addButton.addEventListener("click", addTheThing);


let myList = [];
let myListArea = document.getElementById("wishList");


// The addTheThing() function creates a ref-
// erence to the input field when the Add It button is clicked and then
// passes it as an argument to the two other functions in the program.
function addTheThing() {

    let theThing = document.getElementById("iWant");
//This function gets the value and adds it to the list
    addToTheList(theThing);
//Pass theThing as an argument to the function that resets the
// value of the input field to blank, resetInput().    
    resetInput(theThing);

}
//The purpose of addToTheList is to accept an argument, add it to
// an array, and then add it to an unordered list in the browser win-
// dow. 
function addToTheList(thingToAdd) {
    myList.push(thingToAdd.value);
    let newListItem = document.createElement("li");
    newListItem.innerHTML = myList[myList.length - 1];

    myListArea.appendChild(newListItem);

}

function resetInput(inputToReset) {
    inputToReset.value = "";
}

function printView() {
    let listPage = document.getElementById("listPage");
    let formArea = document.getElementById("formArea");

    formArea.style.display = "none";
    listPage.className = "print";
    myListArea.innerHTML = "";
    myList.sort();

    for (let i = 0; i < myList.length; i++) {
        wishList.innerHTML += "<li>" + myList[i] + "</li>";
    }
    //window.print();
}