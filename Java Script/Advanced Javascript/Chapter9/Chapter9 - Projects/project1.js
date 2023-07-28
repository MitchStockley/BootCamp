//Manipulating HTML elements with JavaScript

let output = document.querySelector(".output"); //selecting elements with approriate tags
let mainList = output.querySelector("ul");
mainList.id = "mainList"; 
console.log(mainList);
let divs = document.querySelectorAll("div");

//Using a for loop, set the ID of each of the div tags to id with a numeric value
// of the order they appear within output. Still within the loop, alternate the
// color of the contents of each element in output to be red or blue.

for(let i = 0; i < divs.length; i++){
    console.log(divs[i].tagName);
 divs[i].id = "id" + (i + 1);
if(i % 2){
divs[i].style.color = "red";

} else {

    divs[i].style.color = "blue";
}
}





