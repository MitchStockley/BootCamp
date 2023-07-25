//Interactive voting system

/*
The below code will create a dynamic list of people that can be clicked, and it will
update the corresponding value with the number of times that name was clicked. It
also includes an input field that will allow you to add more users to the list, each of
which will create another item in the list that can be interacted with the same as the
default list items
 */

window.onload = build;
let myArray = ["Mitch", "Chad", "Storm", "Kim", "lauren"];

let message = document.getElementById("message");
let addFriend = document.getElementById("addFriend");
let addNew = document.getElementById("addNew");
let output = document.getElementById("output");


addNew.onclick = function () {
    let newFriend = addFriend.value;
    adder(newFriend, myArray.length, 0);
    myArray.push(newFriend);

}

function build() {
    myArray.forEach((item, index) => {
        adder(item, index, 0)
    })
}

function adder(name, index, counter) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.classList.add("box");
    td1.textContent = index + 1;
    let td2 = document.createElement("td");
    td2.textContent = name;
    let td3 = document.createElement("td");
    td3.textContent = counter;
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.onclick = function () {
        console.log(tr.lastChild);
        let val = Number(tr.lastChild.textContent);
        val++;
        tr.lastChild.textContent = val;

    }
    output.appendChild(tr);
}

