
let array = [];

// Get a reference to the HTML element with class "w3-container"
let container = document.querySelector(".w3-container");

// Attach a click event listener to the container element, so that when any of its child elements are clicked, the function "handleClicks" will be called
container.addEventListener("click", handleClicks);

// This function will be called when a click event occurs inside the container element
function handleClicks(e){
    // Get the clicked element from the event object
    let el = e.target;
    
    // Checks if the clicked element has an "id" attribute (i.e., it has an id)
    if(el.id){
        // Create a temporary object to store information about the clicked element
        let temp = {};
        
        // Store the text content of the clicked element in the "content" property of the temporary object
        temp.content = el.textContent;
        
        // Store the id of the clicked element in the "id" property of the temporary object
        temp.id = el.id;
        
        // Store the tag name of the clicked element in the "tagName" property of the temporary object
        temp.tagName = el.tagName;
        
        // Store the class name of the clicked element in the "class" property of the temporary object
        temp.class = el.className;
        
        // Print the clicked element's details to the console using "console.dir" (this will display the element and its properties in a hierarchical format)
        console.dir(el);
        
        // Push the temporary object containing the clicked element's information into the "array"
        array.push(temp);
        console.log(array);
    }
}


