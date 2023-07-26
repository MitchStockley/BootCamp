//Evaluating a number game
// Ask the user to enter a number and check whether it's greater than, equal to, or less
// than a dynamic number value in your code. Output the result to the user.

let userNumber = prompt('Enter a number between 0 and 100');
let secretNumber = 60;
let number = parseInt(userNumber);

if (number < secretNumber) {
    alert('Your number is less than the number');
    console.log('too low');
} if (number > secretNumber) {
    alert('Your number is greater than the number');
    console.log('too high');
} if (number === secretNumber) {
    alert('Your number is equal to the number');
    console.log('equal');
};