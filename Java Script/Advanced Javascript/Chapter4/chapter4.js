// let rain = true;
// if (rain) {
//     console.log("** Taking my umbrella when I need to go outside **");
// } else {
//     console.log("** I can leave my umbrella at home **");
// }

// let age = prompt("what is your age");
// if (age < 18) {

//     alert("sorry")
// } else {
//     alert("Verified");
// }

// let hobby = "dancing";
// if(hobby === "coding"){
// console.log("** I love coding too! **");
// } else {
// console.log("** Can you teach me that? **");
// }

// let age = prompt("What is your age?");
// let cost = 0;
// let message;
// if (age < 3) {
//     cost = 0;
//     message = "Access is free under three.";
// } else if ( age < 12) {
//     cost = 5;
//     message = "With the child discount, the fee is 5 dollars";
// } else if (age < 65) {
//     cost = 10;
//     message = "A regular ticket costs 10 dollars.";
// } else {
//     cost = 7;
//     message = "A ticket is 7 dollars.";
// }
// console.log(message);
// console.log("Your Total cost " + cost);

//Conditional ternary operators
// let age = prompt("what is your age");
// let access = age < 18 ? "denied" : "allowed"; //expression ? then -is it true - then do this - else do that (basic explanation)
// alert(access);

// Same thing but with booleon

// let id = confirm("Do you have a physical ID?");
// let validId = id ? "Enjoy your stay at the hotel" : "Please return with your Id";
// alert(validId);

// let randomNumber = Math.floor(Math.random() * 6);
// let question = prompt("Ask me a question?");
// let message;

// switch(randomNumber) {
//     case 0: 
//     message = `${question} I dont know`;
//     break;
//  case 1: 
// message = `${question} Ask me later`;
// break; 
// case 2: 
// message = `${question} My head is too sore to answer`;
// break; 
// case 3: 
// message = `${question} Eish`;
// break; 
// case 4: 
// message = `${question} I am stupid`;
// break;
//  case 5: 
// message = `${question} I am smart`;
// break; 
// case 6: 
// message = `${question} who knows`;
// break; 
// }

// alert(message);

// let grade = prompt("What grade did you get? A,B,C,D,E,F...").toUpperCase();
// switch (grade) {
//     case "F":
//     case "D":
//         alert("You failed");
//         break;
//     case "C":
//     case "B":
//         alert("You passed");
//         break;
//     case "A":
//         alert("You are smart! well done");
//         break;
//     default:
//         alert("I dont know that grade??");
// }

let num = Number(prompt("Enter a number between 1-10"));
let message = "My selection: ";

switch (num) {
    case 1:
    case 2:
        message += "Your prize is a hoiliday for 2 to Mauritius";
        break;
    case 3:
    case 4:
        message += "Your prize is a R10 000";
        break;
    case 5:
    case 6:
        message += "Your prize is the Audi";
        break;
    case 7:
    case 8:
        message += "Your prize is a laptop";
        break;
    case 9:
    case 10:
        message += "Your prize is a voucher";
        break;
    default:
        message += "Wrong number";

}
alert(message);