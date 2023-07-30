//Mouse position tracker 


// Select the element with class name "container" and store it in the variable `els`.
let els = document.querySelector(".container");

// Event listener for the "mouseover" event, which occurs when the mouse pointer is moved onto the element.
els.addEventListener("mouseover", (e) => {
    // When the mouse pointer hovers over the element, add the class "active" to it.
    e.target.classList.add('active');
});

// Event listener for the "mouseout" event, which occurs when the mouse pointer leaves the element.
els.addEventListener('mouseout', (e) => {
    // When the mouse pointer leaves the element, remove the class "active" from it.
    e.target.classList.remove('active');
});

// Event listener for the "mousemove" event, which occurs when the mouse pointer is moved over the element.
// When this event is triggered, it will call the `coordin` function to display mouse coordinates.
els.addEventListener('mousemove', coordin);

// Function to display the current mouse coordinates when the mouse moves over the "container" element.
function coordin() {
    // Get the current X and Y coordinates of the mouse pointer using `event.clientX` and `event.clientY`.
    let html = "X:" + event.clientX + " | Y:" + event.clientY;

    // Update the content of the element with the ID "output" with the current mouse coordinates.
    document.getElementById("output").innerHTML = html;
}
