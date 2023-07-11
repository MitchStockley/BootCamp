

/*Arrays
let dinosoars = [
    "T-Rex",
    "Velociraptor",
    "Stegosaurus",
    "Triceratops",
    "Brachiosaurus",
    "Pteranodon",
    "Apatosaurus",
    "Diplodocus",
    "Compsognathus",
]
console.log(dinosoars[0]);
console.log(dinosoars[dinosoars.length -1]);
console.log(dinosoars.indexOf("Diplodocus"))
alert(dinosoars)
dinosoars[0] = "Triceratops"; 
console.log(dinosoars);
*/

/*
let subjects = [];
subjects[0] = "Maths";
subjects[1] = "Bio";
subjects[2] = "History";
subjects[3] = "Tech"
console.log(subjects);
*/

/*
let dinosaurs = [];
dinosaurs[0] = "T-Rex";
dinosaurs[1] = "Velociraptor";
dinosaurs[2] = "Stegosaurus";
dinosaurs[3] = "Triceratops";
dinosaurs[4] = "Brachiosaurus";
dinosaurs[5] = "Pteranodon";
dinosaurs[6] = "Apatosaurus";
dinosaurs[7] = "Diplodocus";
dinosaurs[8] = "Compsognathus";

console.log(dinosaurs);
*/

/*
let dinosaursAndNumbers = [3, "dinosaurs", ["triceratops", 
"stegosaurus", 3627.5], 10];
console.log(dinosaursAndNumbers[3]);
*/

/*
let maniacs = ["Yakko", "Wakko", "Dot"];


console.log(maniacs[0]);
console.log(maniacs[1]);
console.log(maniacs[2]);
console.log(maniacs.length);
console.log(maniacs[maniacs.length - 1]);
*/

//Adding Elements to an Array
//.unshift pushes element to the front of the list
/*
let animals = [];
animals.push("Cat");
console.log(animals);
animals.push("Dog");
console.log(animals);
animals.push("Llama");
console.log(animals);
animals.unshift("Monkeys");
console.log(animals);
animals.unshift("Polar Bear");
console.log("There are ",animals, "in the array");

/* Removing Elements from an Array
let lastAnimals = animals.pop("Llama");
console.log(lastAnimals);
let firstAnimal = animals.shift();
console.log(animals);
console.log(firstAnimal);
*/

//Adding Arrays

/*
let furryAnimals = ["Alpaca", "Ring-tailed Lemur", "Yeti"];
let scalyAnimals = ["Boa Constrictor", "Godzilla"];
let featheredAnimals = ["Macaw", "Dodo"];
let allAnimals = furryAnimals.concat(scalyAnimals,featheredAnimals);
console.log(scalyAnimals);
console.log(furryAnimals);
console.log(allAnimals);
*/

/*
let colors = ["Red",
 "Green", 
 "Blue"];
 console.log(colors.indexOf("Blue"));
 console.log(colors[2]);
 */

 //let insects = ["Bee", "Ant", "Bee", "Bee", "Ant"];
 //console.log(insects.indexOf("Bee",3));

 /*Turning an Array into a String

 let boringAnimals = ["Monkey", "Cat", "Fish", "Lizard"];
 let stringForBoringAnimals = boringAnimals.join(" ");
 let stringForBoringAnimals2 = boringAnimals[0] + " " + boringAnimals[1] + " " + boringAnimals[2] + " " + boringAnimals[3];
 console.log(boringAnimals.join(" - "));
 console.log(stringForBoringAnimals2);
 console.log(boringAnimals);
 console.log(stringForBoringAnimals);
 */


let landmarks = [];
landmarks.push("My house");
landmarks.push("Front path");
landmarks.push("Flickering streetlamp");
landmarks.push("Leaky fire hydrant");
landmarks.push("Fire station");
landmarks.push("Cat rescue center");
landmarks.push("My old school");
landmarks.push("My friend's house");
console.log(landmarks);

/*
console.log(landmarks.pop());
console.log(landmarks.pop());
console.log(landmarks.pop());
console.log(landmarks.pop());
console.log(landmarks.pop());
console.log(landmarks.pop());
console.log(landmarks.pop());
console.log(landmarks.pop());
*/

// This code created a random whole numer between 0 - 100
//console.log(Math.floor(Math.random()*100));

//let randomWords = ["Explosion", "Cave", "Princess", "Pen"];
//let randomIndex = Math.floor(Math.random() * randomWords.length);
//console.log(randomWords[randomIndex]);

/*
let student = ["Mitch", "Jurie", "Bhaba", "Vusi"];
let randomIndex = Math.floor(Math.random() * student.length);
console.log(student[randomIndex]);

let games = ["Monopoly", "Thirty seconds", "Chess"];
let gamesIndex = Math.floor(Math.random() * games.length);
console.log(games[gamesIndex]);
*/


let randomBodyParts = ["Face", "Nose", "Hair","Face"];
let randomAdjectives = ["Smelly", "Boring", "Stupid"];
let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
let animalsBodyParts = ["Dogs foot", " chickens face"];

let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
// Pick a random adjective from the randomAdjectives array:
let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)]; 
// Pick a random word from the randomWords array:
let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
// Join all the random strings into a sentence:
let animalsBodyPart = animalsBodyParts[Math.floor(Math.random() * 1)];

let randomInsult = ["Your",randomBodyPart, "is more",randomAdjective, "than a",animalsBodyPart, "!!!"].join(" ");
console.log(randomInsult);


let randomInsult2 = "Your " + randomBodyPart + " " + "is more " + randomAdjective +" " + "than a " + animalsBodyPart + "!!!";
console.log(randomInsult2);

//string being joined by text using (.join method)
let nums = [3,2,1];
console.log(nums.join(" is bigger than "));














