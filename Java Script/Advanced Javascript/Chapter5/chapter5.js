

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// for (let i = 1, x = 3; i < 100; i = i * x) {
//     console.log(i);

// }

// let nr1 = 0;
// let nr2 = 1;
// let temp;


// fibonacciArray = [];
// while (fibonacciArray.length < 25) {
//     fibonacciArray.push(nr1);
//     temp = nr1 + nr2;
//     nr1 = nr2;
//     nr2 = temp;
// }

// console.log(fibonacciArray);

// let incorrect = true;
// let secret = Math.floor(Math.random() * 10 + 1);


// while (incorrect) {
//     let guess = Number(prompt("Guess a number between 1 and 10"));
//     if (guess === secret) {
//         alert("Correct");
//         incorrect = false;
//     } else if (guess < secret) {
//         alert("too low")
//     } else {
//         alert("too high")
//     }
// }

// let incorrect = true;
// let secret = Math.floor(Math.random() * 10 + 1);

// do {
//     guess = Number(prompt("Guess a number between 1 and 10"));
//         if (guess === secret) {
//             alert("Correct");
//             incorrect = false;
//         } else if (guess < secret) {
//             alert("too low")
//         } else {
//             alert("too high")
//         }




// } while(incorrect)

// let arr = [];
// for (let i = 0; i < 100; i++) {
//     arr.push(i);
// }

// console.log(arr);


//Practice exercise 5.3

// let myWork = [];
// let lesson;

// for (let i = 1; i < 11; i++) {
//     lesson = {};
//     lesson.name = `Lesson ${i}`;
//     lesson.staus = i % 2 ? true : false;
//     myWork.push(lesson);

// }

// console.log(myWork);



// let arrOfArrays = [];
// for (let i = 0; i < 3; i++) {
//     arrOfArrays.push([]);
//     for (let j = 0; j < 7; j++) {
//         arrOfArrays[i].push(j);
//     }
// }

// console.log(arrOfArrays);

//tables and collums with loops
// let myTable = [];
// let rows = 5;
// let cols = 5;
// let temp;
// let counter = 1;

// for (let i = 0; i < rows; i++) {
//     temp = [];
//     for (let x = 0; x < cols; x++) {
//         //alert(counter);
//         temp.push(counter);
//         counter++;
//     }
//     //alert("Pushing");
//     myTable.push(temp);
// }

// console.log(myTable);

//Practice exercise 5.5
// let myTable = [];
// let temp = [];

// for (let count = 1; count < 65; count++ ) {
//     temp.push(count);
//     if (count % 8 === 0) {
//         myTable.push(temp);
//         temp = [];
//     }


// }
// console.log(myTable);


//for of loop

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let name of names){
// console.log(name);
// }

// let numbers = [];
// for (let i = 0; i < 10; i++) {
//     numbers.push(i);
// }

// console.log(numbers);
// console.log("normal for loop");

// for (let x = 0; x < numbers.length; x++) {
//     console.log(numbers[x]);
// }

// console.log("for of loop");
// for (let e of numbers) {
//     console.log(e);

// }



let dog = {
    name: "bruno",
    color: "Brown"
}

for(let key in dog) {
    console.log(key, dog[key]);
}