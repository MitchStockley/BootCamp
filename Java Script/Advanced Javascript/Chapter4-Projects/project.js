//Evaluating a number game
// Ask the user to enter a number and check whether it's greater than, equal to, or less
// than a dynamic number value in your code. Output the result to the user.

// let userNumber = prompt('Enter a number between 0 and 100');
// let secretNumber = 60;
// let number = parseInt(userNumber);

// if (number < secretNumber) {
//     alert('Your number is less than the number');
//     console.log('too low');
// } if (number > secretNumber) {
//     alert('Your number is greater than the number');
//     console.log('too high');
// } if (number === secretNumber) {
//     alert('Your number is equal to the number');
//     console.log('equal');
// };



//Friend checker game
/*Ask the user to enter a name, using the switch statement to return a confirmation
that the user is a friend if the name selected is known in the case statements. You
can add a default response that you don't know the person if it's an unknown name.
Output the result into the console. */

// let friendName = prompt("Please enter your name");
// let friend = friendName.toLowerCase();

// switch (friend) {
//     case 'john': alert('he is a friend');
//         break;
//     case 'james': alert('he is a friend');
//         break;
//     case 'con': alert('he is a friend');
//         break;
//     case 'carlos': alert('he is a friend');
//         break;
//     case 'fraser': alert('he is a friend');
//         break;
//     default: alert('I dont know this person');
//         break;


// }

//Rock Paper Scissors game

//This is a game between a player and the computer, where both will make a random
// selection of either Rock, Paper, or Scissors (alternatively, you could create a version
//using real player input!). Rock will beat out Scissors, Paper will beat out Rock, and
//Scissors will beat out Paper. You can use JavaScript to create your own version of
//this game, applying the logic with an if statement. Since this project is a little more
//difficult, here are some suggested steps:

// let arr1 = ["rock","paper", "scissors"].Math.floor(Math.random() *arr1.length);
// alert(arr1)
// let randomNum;ber1 = Math.floor(Math.random() * arr.length);
// let randomNumber2 = Math.floor(Math.random() * arr.length);

// let userMessage = ("The results were: ", randomNumber1, randomNumber2,"You won");




let button = document.getElementById("button");
let buttonTxt = document.getElementById("btnClick");
let gameButton = document.getElementById("gameButton");
const resultText = document.getElementById('resultText');

button.addEventListener('click', function () {
    if (btnClick.style.display === 'none') {
        btnClick.style.display = 'block';
    } else { btnClick.style.display = 'none'; }
});

gameButton.addEventListener('click', function (e) {

    let arr = ["rock", "paper", "scissors"];
    let user = arr[Math.floor(Math.random() * arr.length)];
    let bot = arr[Math.floor(Math.random() * arr.length)];


    if (user === "rock" && bot === "scissors") {
        // alert(user +" " + bot + "you won!");
        // alert("You won");
        resultText.textContent = `${user} vs ${bot}. You won!`;
    } else if (user === "paper" && bot === "rock") {
        resultText.textContent = `${user} vs ${bot}. You won!`;
        //alert(user +" " + bot + "you won!");
        //alert("You won");
    } else if (user === "scissors" && bot === "paper") {
        resultText.textContent = `${user} vs ${bot}. You won!`;
        // alert(user +" " + bot + "you won!");
        //alert("You won");
    } else if (user === bot) {
        resultText.textContent = `${user} vs ${bot}. It's a tie!`;
        // alert(user +" " + bot + "Its a tie!");
        // alert("Its a tie");
    } else if (user === "rock" && bot === "paper") {
        resultText.textContent = `${user} vs ${bot}. You lost!`;
        //alert(user +" " + bot + "you lost!");
        //alert("You lost");
    } else if (user === "paper" && bot === "scissors") {
        resultText.textContent = `${user} vs ${bot}. You lost!`;
        //alert(user +" " + bot + "you lost!");
        //alert("You lost");
    } else if (user === "scissors" && bot === "rock") {
        resultText.textContent = `${user} vs ${bot}. You lost!`;
        //alert(user +" " + bot + "you lost!");
        //alert("You lost");

    } 
});

var isImagesVisible = false; // A flag to keep track of image visibility

document.getElementById("showImagesBtn").addEventListener("click", function() {
    var images = document.querySelectorAll(".images img");
    if (isImagesVisible) {
        images.forEach(function(image) {
            image.style.display = "none"; // Hide the images when the button is clicked again
        });
        isImagesVisible = false;
        this.innerText = "Show Images"; // Update the button text
    } else {
        images.forEach(function(image) {
            image.style.display = "inline"; // Show the images when the button is clicked
        });
        isImagesVisible = true;
        this.innerText = "Hide Images"; // Update the button text
    }
});


