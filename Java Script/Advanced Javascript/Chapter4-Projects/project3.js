





//Rock Paper Scissors game

//This is a game between a player and the computer, where both will make a random
// selection of either Rock, Paper, or Scissors (alternatively, you could create a version
//using real player input!). Rock will beat out Scissors, Paper will beat out Rock, and
//Scissors will beat out Paper. You can use JavaScript to create your own version of
//this game, applying the logic with an if statement. 




const scoreText = document.getElementById('scoreText');
let button = document.getElementById("button");
let buttonTxt = document.getElementById("btnClick");
let gameButton = document.getElementById("gameButton");
const resultText = document.getElementById('resultText');

button.addEventListener('click', function () {
    if (btnClick.style.display === 'none') {
        btnClick.style.display = 'block';
    } else { btnClick.style.display = 'none'; }
});


let userScore = 0;

gameButton.addEventListener('click', function (e) {
    let arr = ["rock", "paper", "scissors"];
    let user = arr[Math.floor(Math.random() * arr.length)];
    let bot = arr[Math.floor(Math.random() * arr.length)];

    if (user === "rock" && bot === "scissors" || user === "paper" && bot === "rock" || user === "scissors" && bot === "paper") {
        resultText.textContent = `${user} vs ${bot}. You won!`;
        userScore += 50; // Add 50 points for winning
    } else if (user === bot) {
        resultText.textContent = `${user} vs ${bot}. It's a tie!`;
    } else {
        resultText.textContent = `${user} vs ${bot}. You lost!`;
        userScore -= 50; // Deduct 50 points for losing
    }

    // Display the updated score
    scoreText.textContent = `Your score: ${userScore}`;

    
});





