//Local file reader//

//checking if my browser supports file reading.

// let message = document.getElementById("message");
// if (window.FileReader) {
//     message.innerText = "Good to go!";
// } else {
//     message.innerText = "No FileReader :(";
// }

//Uploading files//

//It gives a blank HTML page with a Choose file button and the No file chosen
// comment behind it. Clicking on the button pops up the filesystem and you can
// select a file

// let message = document.getElementById("message");

// function uploadFile(files) {
//     console.log(files[0]);
//     message.innerText = files[0].name;
// }


//something similar for multiple files. Here is how to upload multiple files at the same time

// let message = document.getElementById("message");

// function uploadFile(files) {
//     for(let i = 0; i < files.length;i++) {
//         message.innerHTML += files[i].name + "</br>";
//     }
// } 

//Reading files//

//There is a special JavaScript object for reading files. It has a very suitable name:FileReader.

// let message = document.getElementById("message");
// function uploadAndReadFile(files){
//     let fr = new FileReader();
//     fr.onload = function (e) { //anon function that is sending on the event data and allows html and js to connect to a file
//         message.innerHTML = e.target.result;
//     };
//     fr.readAsText(files[0]); //reading the data using readAsText method
// }

//Practice exercise 14.1

// let message = document.getElementById("message");
// let output = document.querySelector(".output");
// let input = document.querySelector("input");

// input.addEventListener("change",uploadAndReadFile) // Add an event listener to the "input" element. When the user selects a file using the file input,
// // the "uploadAndReadFile" function will be called

// function uploadAndReadFile(e){
//     let files = e.target.files; //  // Get the selected files from the event object
//     for(let i = 0; i < files.length; i++){
//         let file = files[i];// Get the current file from the array of files
//         let img = document.createElement("img"); // Create an <img> element to display the image thumbnail
//         img.classList.add("thumb");//Add the "thumb" class to the image for styling purposes

//         img.file = file;// Set the "file" property of the image to the current file
//         output.appendChild(img);// Append the image to the "output" element to display the thumbnail
//         let reader = new FileReader(); // Create a new FileReader object to read the file contents

//         reader.onload = (function (myImg) { // Define an onload event handler for the reader. This function will be called when the
//            // file reading is completed successfully.
//             return function (e) {
//                 myImg.src= e.target.result; //This will display the image thumbnail on the page.
//             };
//         }) (img); //Call the closure function immediately with the "img" variable as an argument

//         reader.readAsDataURL(file); //Start reading the file as a data URL. This will trigger the onload event when the file reading is completed.
//     }

// }



//Getting position data with GeoLocation

//this shows the users geolocation
// window.onload = init;
// function init() {
//     navigator.geolocation.getCurrentPosition(showGeoPosition);
// }

// function showGeoPosition(data) {
//     console.dir(data);
// }

//HTML5 canvas


// let canvas = document.getElementById("c1");
// let ctx = canvas.getContext("2d");
// canvas.width = 500; //px
// canvas.height = 500; //px
// ctx.fillStyle = "pink";
// ctx.fillRect(20, 40, 100, 100); //With the fillRect() method on the context of the canvas, we can draw a rectangle
// on the canvas. It takes four parameters. The first two are the x and y coordinates 
//last 2 are width and height of rectangle


// window.onload = function () {
//     let canvas = document.getElementById("c1");
//     canvas.height = 300;
//     canvas.width = 300;
//     let ctx = canvas.getContext("2d");
//     let myImage = document.getElementById("flower");
//     ctx.drawImage(myImage, 10, 10); //We use the drawImage() method to add an image to the canvas. It takes three
//     // arguments: the image, the x position, and the y position
// };

//Adding animations to the canvas

// We do this by using loops and recursion, combined with timeout(). These drawings
// with (short) time intervals result in an animation.

// This will start drawing a square at position 5, 50. And after 50 ms, it will draw
// another square at position 10, 50, and after that at 15, 50. And it will keep on
// changing this x value by 5 up to the point that x gets bigger than the width of the
// canvas, when it is then set to zero. 

// window.onload = init;
// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
// canvas.height = 500;
// canvas.width = 500;
// var pos = {
//     x: 0,
//     y: 50,
// };
// function init() {
//     draw();
// }
// function draw() {
//     pos.x = pos.x + 5;
//     if (pos.x > canvas.width) {
//         pos.x = 0;
//     }
//     if (pos.y > canvas.height) {
//         pos.y = 0;
//     }
//     ctx.fillRect(pos.x, pos.y, 100, 100);
//     window.setTimeout(draw, 50);
// }

