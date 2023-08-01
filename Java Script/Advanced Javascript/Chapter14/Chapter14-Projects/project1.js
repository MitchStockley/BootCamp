// Create a new HTML canvas element
const canvas = document.createElement("canvas");

// Get the 2D rendering context of the canvas
const ctx = canvas.getContext("2d");

// Set the width and height attributes of the canvas
canvas.setAttribute("width", "500");
canvas.setAttribute("height", "300");

// Prepend the canvas element to the <body> of the HTML document
document.body.prepend(canvas);

// Create an array 'colVal' with 50 elements, all initialized to 0
const colVal = [];
for (let x = 0; x < 50; x++) {
  colVal.push(0);
}

// Define a function named 'matrix'
function matrix() {
  // Set the fill color and draw a semi-transparent black rectangle covering the entire canvas
  ctx.fillStyle = "rgba(0,0,0,.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Set the fill color to green
  ctx.fillStyle = "green";

  // Iterate through each element in the 'colVal' array
  colVal.map((posY, index) => {
    // Generate a random number between 0 and 1
    let output = Math.random() < 0.5 ? 0 : 1;

    // Calculate the x-coordinate (posX) for the current element
    let posX = (index * 10) + 10;

    // Draw the character ('0' or '1') at the calculated position (posX, posY)
    ctx.fillText(output, posX, posY);

    // Move the character position down (increase posY) for the next frame
    // If the new posY is beyond a threshold (100 + random value between 0 and 300),
    // set the corresponding colVal element to 0 (reset position to the top)
    // Otherwise, set the colVal element to the new posY + 10 (move down)
    if (posY > 100 + Math.random() * 300) {
      colVal[index] = 0;
    } else {
      colVal[index] = posY + 10;
    }
  });
}

// Call the 'matrix' function every 50 milliseconds to create the animation effect
setInterval(matrix, 50);
