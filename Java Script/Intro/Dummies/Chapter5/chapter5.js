document.getElementById("myName").innerHTML = "Mitchie";
let item1;
let item2;
let item3;

document.getElementById("changeList").onclick = newList;

function newList() {
    item1 = prompt("Enter a new first item");
    item2 = prompt("Enter a new second item");
    item3 = prompt("Enter a new third item");
    updateList();
}

function updateList() {
    document.getElementById("firstThing").innerHTML = item1;
    document.getElementById("secondThing").innerHTML = item2;
    document.getElementById("thirdThing").innerHTML = item3;
}