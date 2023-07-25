//Manipulating HTML elements with JavaScript

let output = document.querySelector(".output");
let mainList = output.querySelector("ul");
mainList.id = "mainList";
console.log(mainList);
let divs = document.querySelectorAll("div");

for(let i = 0; i < divs.length; i++){
    console.log(divs[i].tagNam);
 divs[i].id = "id" + (i + 1);
if(i % 2){
divs[i].style.color = "red";

} else {

    divs[i].style.color = "blue";
}
}





