

// // Changing background colour of left eye.
// document.getElementById("lefteye").style.backgroundColor = "purple";
// // Rotating the head.
// document.getElementById("head").style.transform = "rotate(15deg)";
// // Put a 2‐pixel‐wide, solid black border around his body.
// document.getElementById("body").style.border = "2px black solid"; 
// // Round the corners of his mouth.
// document.getElementById("mouth").style.borderRadius = "4px";
// // Put yellow dots around his right eye.
// document.getElementById("righteye").style.border ="4px yellow dotted";
// // Change his left arm’s color.
// document.getElementById("leftarm").style.backgroundColor = "#FF00FF";
// // Change the text color
// document.getElementById("body").style.color = "#FF0000";
// // Give Douglas hair.
// document.getElementById("head").style.borderTop = "5px black solid";

let rightEye = document.getElementById("righteye");
let leftEye = document.getElementById("lefteye");
let leftArm = document.getElementById("leftarm");
let rightArm = document.getElementById("rightarm");
let nose = document.getElementById("nose");

rightEye.addEventListener("click", moveUpDown);
leftEye.addEventListener("click", moveUpDown);
leftArm.addEventListener("click", moveRightLeft);
rightArm.addEventListener("click", moveLeftRight);
nose.addEventListener("click", moveNoseUpDown);

function moveUpDown(e) {
let robotParts = e.target;
let t = 0;
let animation = setInterval(frame, 10);
function frame() {
    robotParts.style.top = t + "%"
    t ++;
    if (t === 20) {

        clearInterval(animation);
    }
}

}

function moveRightLeft(e) {
    let robotParts = e.target;
    let l = 0;
    let animation = setInterval(frame, 10);
    function frame() {
        robotParts.style.left = l + "%"
        l ++;
        if (l === 71) {
    
            clearInterval(animation);
        }
    }
    
    }

    function moveLeftRight(e) {
        let robotParts = e.target;
        let l = 0;
        let animation = setInterval(frame, 10);
        function frame() {
            robotParts.style.left = l + "%"
            l ++;
            if (l === 22) {
        
                clearInterval(animation);
            }
        }
        
        }

        function moveNoseUpDown(e) {
            let robotParts = e.target;
            let t = 0;
            let animation = setInterval(frame, 10);
            function frame() {
                robotParts.style.top = t + "%"
                t ++;
                if (t === 50) {
            
                    clearInterval(animation);
                }
            }
            
            }
    
    

   