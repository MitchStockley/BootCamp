
//Collapsible accordion component - Project 1 

//Build a collapsing and expanding accordion component that will open page
// elements, hiding and showing content when the title tab is clicked. 


let title = document.querySelectorAll(".title");
let myText = document.querySelectorAll("myText");

//Iterate through all the title elements and add event listeners that, once
// clicked, will select the next element siblings.

title.forEach((el) => {
    el.addEventListener("click", (e) => {
        console.log(el.nextElementSibling);
        remover();
        el.nextElementSibling.classList.toggle("active"); //Select the element on the click action and toggle the classlist of the element with the class of active.
    })

})
// Add a function that will be invoked each time the elements are clicked that
// will remove the class of active from all the elements.

function remover() {
    myText.forEach((ele) => {
        ele.classList.remove("active");
    })
}


