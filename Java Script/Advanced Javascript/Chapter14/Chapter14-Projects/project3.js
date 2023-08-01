// Get references to the relevant HTML elements
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const penColor = document.querySelector("#penColor");
const penWidth = document.querySelector("#penWidth");
const btnSave = document.querySelector(".save");
const btnClear = document.querySelector(".clear");
const output = document.querySelector(".output");

// Object to store mouse location and drawing status
const mLoc = {
  draw: false,
  x: 0,
  y: 0,
  lastX: 0,
  lastY: 0
};

// Set a black border for the canvas
canvas.style.border = "1px solid black";

// Event listeners for the save and clear buttons
btnSave.addEventListener("click", saveImg);
btnClear.addEventListener("click", clearCanvas);

// Event listener for mouse movement on the canvas
canvas.addEventListener("mousemove", (e) => {
  mLoc.lastX = mLoc.x;
  mLoc.lastY = mLoc.y;
  mLoc.x = e.clientX;
  mLoc.y = e.clientY;
  draw(); // Call the draw function to draw lines on the canvas
});

// Event listeners for mouse down, up, and out of the canvas
canvas.addEventListener("mousedown", (e) => {
  mLoc.draw = true;
});
canvas.addEventListener("mouseup", (e) => {
  mLoc.draw = false;
});
canvas.addEventListener("mouseout", (e) => {
  mLoc.draw = false;
});

// Function to save the canvas drawing as an image
function saveImg() {
  const dataURL = canvas.toDataURL();
  console.log(dataURL);

  // Create an image element and prepend it to the output area
  const img = document.createElement("img");
  output.prepend(img);
  img.setAttribute("src", dataURL);

  // Create a download link and append it to the output area
  const link = document.createElement("a");
  output.append(link);
  let fileName = Math.random().toString(16).substr(-8) + ".png";
  link.setAttribute("download", fileName);
  link.href = dataURL;
  link.click();

  // Remove the download link from the output area
  output.removeChild(link);
}

// Function to clear the canvas
function clearCanvas() {
  let temp = confirm("Clear canvas?");
  if (temp) {
    // Clear the canvas by drawing a white rectangle covering the entire canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

// Function to draw lines on the canvas
function draw() {
  if (mLoc.draw) {
    // Begin a new path
    ctx.beginPath();
    // Move the pen to the last mouse position
    ctx.moveTo(mLoc.lastX, mLoc.lastY);
    // Draw a line to the current mouse position
    ctx.lineTo(mLoc.x, mLoc.y);
    // Set the stroke style (pen color)
    ctx.strokeStyle = penColor.value;
    // Set the line width (pen width)
    ctx.lineWidth = penWidth.value;
    // Stroke the path (draw the line)
    ctx.stroke();
    // Close the path
    ctx.closePath();
  }
}
