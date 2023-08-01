//star rating
// Get a reference to the element with class "stars"
let starsUL = document.querySelector(".stars");
let star = document.querySelectorAll(".star");
let output = document.querySelector(".output");

// Iterate over each element with class "star" in the NodeList and attach a click event listener to each of them
star.forEach((star, index) => {
  // Add a custom property "starValue" to each "star" element, representing its index + 1
  star.starValue = (index + 1);

  // Attach a click event listener to the current "star" element, calling the function "starRate" when clicked
  star.addEventListener("click", starRate);
});

// This function will be called when a "star" element is clicked
function starRate(e) {
  // Update the content of the element with class "output" to display the rating chosen by the user
  output.innerHTML = `You rated this ${e.target.starValue} stars`;

  // Iterate over each "star" element in the NodeList and modify their appearance based on the user's rating
  star.forEach((star, index) => {
    if (index < e.target.starValue) {
      // Add the class "orange" to "star" elements with an index less than the clicked element's starValue,
      // making them appear filled or highlighted
      star.classList.add("orange");
    } else {
      // Remove the class "orange" from "star" elements with an index greater than or equal to the clicked element's starValue,
      // making them appear unfilled or unhighlighted
      star.classList.remove("orange");
    }
  });
}


