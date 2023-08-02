//Miles-to-kilometers converter
let miles = 130;
let km = miles * 1.60934;

console.log("The distance of", miles , "kms", "is equal to", km, "miles");


//BMI Calculator Project

let inches = 300;
let pounds = 70;

let height = inches * 2.54; //converting to cm
let weight = pounds / 2.2046; //converting to kg

console.log(height,weight);

let bmi = weight / (height/100*height/100); //calculating bmi (weight / squared height in meters)
console.log(bmi);