//Hangman game

// let words = ["coding", "javascript", "java", "nodejs"];

// let game = { solution: "", letters: "", puz: [], lettersLeft: 0 };
// let gameArea = document.querySelector(".gameArea");
// let score = document.querySelector(".score");
// let puzzle = document.querySelector(".puzzle");
// let letters = document.querySelector(".letters");
// let button = document.querySelector("button");

// button.addEventListener("click", startGame());


// function startGame() {

//     if (words.length > 0) {
//         button.style.display = "none";
//         game.puz = [];
//         game.lettersLeft = 0;
//         game.solution = words.shift();
//         game.letters = game.solution.split();
//         builder();
//     } else {
//         score.textContent = "No more words";
//     }
// }

// function createElements(eType, eParent, output, clas) {

//     let temp = document.createElement(eType);
//     temp.classList.add("boxE");
//     eParent.append(temp);
//     temp.textContent = output;
//     return temp;

// }

// function builder() {
//     letters.innerHTML = "";
//     puzzle.innerHTML = "";
//     game.letters.forEach(lett => {
//         let div = createElements("div", puzzle, "-", "boxE");
//         if (lett = " ") {
//             div.textContent = " ";
//             div.style.borderColor = "white";


//         } else {
//             game.lettersLeft++;
//         }
//         game.puz.push(div);
//         updateScore();
//     })


//     for (let i = 0; i < 26; i++) {
//         let temp = String.fromCharCode(65 + i);
//         let div = document.createElement("div", letters, temp, "box");
//         // div.addEventListener("click", checker);

//         let checker = function (e) {
//             div.style.backgroundColor = "red";
//             div.classList.remove("box");
//             div.classList.add("boxD");
//             div.removeEventListener("click", checker);

//             checkLetter(temp);

//         }
//         div.addEventListener("click", checker);

//     }
// }

// function checkLetter(letter) {
//     console.log(letter);
//     game.solution.forEach((ele, index) => {
//         if (ele.toUpperCase() == letter) {
//             game.puz[index].textContent = letter;
//             game.lettersLeft--;
//             updateScore();
//         }

//     }
//     )
// }

// function updateScore() {
//     letters.textContent = `Total Letters Left : ${game.lettersLeft}`;
//     if (game.lettersLeft <= 0) {
//         console.log("game over");
//         letters.textContent = "Game Over";
//         button.style.display = "block";
//     }
// }



//solution = cur
//letters = solution
//puzz = puzz
//letters left = total

const game = { cur: "", solution: "", puzz: [], total: 0 };
const myWords = ["learn Javascript", "learn html",
    "learn css"];
const score = document.querySelector(".score");
const puzzle = document.querySelector(".puzzle");
const letters = document.querySelector(".letters");
const btn = document.querySelector("button");
btn.addEventListener("click", startGame);
function startGame() {
    if (myWords.length > 0) {
        btn.style.display = "none";
        game.puzz = [];
        game.total = 0;
        game.cur = myWords.shift();
        game.solution = game.cur.split("");
        builder();
    } else {
        score.textContent = "No More Words.";
    }
}
function createElements(elType, parentEle, output, cla) {
    const temp = document.createElement(elType);
    temp.classList.add("boxE");
    parentEle.append(temp);
    temp.textContent = output;
    return temp;
}
function updateScore() {
    score.textContent = `Total Letters Left : ${game.total}`;
    if (game.total <= 0) {
        console.log("game over");
        score.textContent = "Game Over";
        btn.style.display = "block";
    }
}
function builder() {
    letters.innerHTML = "";
    puzzle.innerHTML = "";
    game.solution.forEach((lett) => {
        let div = createElements("div", puzzle, "-", "boxE");
        if (lett == " ") {
            div.style.borderColor = "white";
            div.textContent = " ";
        } else {
            game.total++;
        }
        game.puzz.push(div);
        updateScore();
    })
    for (let i = 0; i < 26; i++) {
        let temp = String.fromCharCode(65 + i);
        let div = createElements("div", letters, temp, "box");

        let checker = function (e) {
            div.style.backgroundColor = "#ddd";
            div.classList.remove("box");
            div.classList.add("boxD");
            div.removeEventListener("click", checker);
            checkLetter(temp);
        }
        div.addEventListener("click", checker);
    }
}
function checkLetter(letter) {
    console.log(letter);
    game.solution.forEach((ele, index) => {
        if (ele.toUpperCase() == letter) {
            game.puzz[index].textContent = letter;
            game.total--;
            updateScore();
        };
    }
    )
}