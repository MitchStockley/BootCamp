"use strict";
// class Dog {
//   dogName;
//   weight;
//   color;
//   breed;
//   constructor(dogName, weight, color, breed) {
//     this.dogName = dogName;
//     this.weight = weight;
//     this.color = color;
//     this.breed = breed;
//   }
// }

// let dog1 = new Dog("Katana", "10kg", "Black", "Pitbull");
// let dog2 = new Dog("Benji", "40kg", "Brown", "Boerbull");

// console.log(
//   `The dogs name is ${dog1.dogName} and her color is ${dog1.color} and her breed is${dog1.breed}`
// );
// console.log(
//   `The dogs name is ${dog2.dogName} and her color is ${dog2.color} and her breed is ${dog2.breed}`
// );


// Constructors
// The constructor method is a special method that we use to initialize objects with 
// our class blueprint. There can only be one constructor in a class. This constructor 
// contains properties that will be set when initiating the class.
// Here you can see an example of a constructor in a Person class:


// class Person {
//     constructor(firstname, lastname) {
//         this.#firstname = firstname;
//         this.#lastname = lastname;

//     }
//     greet() {
//         console.log(`Hello, my name is ${this.firstname}`);
//     }
//     compliemnt(name, object) {
//         console.log(`Thats a wonderful${object}, ${name} from ${this.firstname}`);
//     }

//     fullName() {
//         return this.firstname + " " + this.lastname;
//     }
// }



// let p = new Person("Mike", "Van Putten");
// console.log(p.firstname, p.lastname);


// let friend1 = new Person("Nic", "Peens");
// console.log("Hello", friend1.firstname, friend1.lastname);

// let friend2 = new Person("James", "Smith");
// console.log(`Hello ${friend2.firstname}${friend2.lastname}`);

// friend2.greet();
// friend1.greet();
// friend1.compliemnt("Sizwe", " car");
// friend2.compliemnt("Sheryl", " car");

// console.log(friend1.fullName());


//Getters and setters
//    Getters and setters are special properties that we can use to get data from a class and
//    to set data fields on the class. Getters and setters are computed properties. So, they
//    are more like properties than they are like functions. We call them accessors. They do
//    look a bit like functions, because they have () behind them, but they are not


// These accessors start with the get and set keywords. It is considered good practice to
// make fields private as much as possible and provide access to them using getters and
// setters. This way, the properties cannot be set from outside without the object itself
// being in control. This principle is called encapsulation. The class encapsulates the
// data, and the object is in control of its own fields.

// class Person {                                              //The getter is used to get the property. Therefore, it doesn't take any parameters, but simply returns the property.

//     #firstname;
//     #lastname;
//     constructor(firstname, lastname) {
//         this.#firstname = firstname;
//         this.#lastname = lastname;

//     }
//     set firstname(firstname) {
//         if (firstname.startsWith("M")) {
//             this.#firstname = firstname;
//         } else {
//             this.#firstname = "M" + firstname;
//         }
//     }

//     get firstname() {
//         return this.#firstname;
//     }
//     set firstname(firstname) {
//         this.#firstname = firstname;
//     }
//     get lastname() {
//         return this.#lastname;
//     }
//     set lastname(lastname) {
//         this.#lastname = lastname;
//     }

// }
// Person.prototype.introduce = function () { console.log(`Hi i am ${this.firstname}`) };
// Person.prototype.favouriteColor = "green";
// let person1 = new Person("Joe", "Deer");
// person1.introduce();
// console.log(`${person1.firstname} has a fav color of ${person1.favouriteColor}`);
// let p = new Person("Maria", "Saga");
// console.log(p.firstname);

// p.firstname = "Adnane";

// console.log(p.firstname);

//Inheritance
// Inheritance is one of the key concepts of OOP. It is the concept that classes can have
// child classes that inherit the properties and methods from the parent class.

// class Vehicle {
//     color;
//     currentSpeed;
//     maxSpeed;
//     constructor(color, currentSpeed, maxSpeed) {
//         this.color = color;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;
//     }
//     move() {
//         console.log("moving at", this.currentSpeed);
//     }

//     accelerate(amount) {
//         this.currentSpeed += amount;
//     }
// }

// class Motorcycle extends Vehicle { //extends inherets from vehicle parent class
//     constructor(color, currentSpeed, maxSpeed, fuel) {

//         super(color, currentSpeed, maxSpeed);
//         this.fuel = fuel;
//     }
//     doWheelie() {
//         console.log("Driving on one wheel")
//     }
// }

// let motorC = new Motorcycle("red", 100, 120, "Diesel");

// console.log(motorC.color);
// motorC.move();
// motorC.accelerate(10);
// motorC.move();

//Chapter 7[ 163 ]
// Practice exercise 7.3
// Create a class that contains properties for different animal species and the sound that
// each species makes, and create two (or more) animals:



// Animal class
class Animal {
    constructor(species, sound) {
      this.species = species;
      this.sound = sound;
    }
  
    // Method to print the animal and its sound
    printSound() {
      console.log(`${this.species} makes the sound: ${this.sound}`);
    }
  }
  
  // Creating animal objects
  let lion = new Animal('Lion', 'Roar');
  let cat = new Animal('Cat', 'Meow');
  
  // Adding a prototype with another action for the animal
  Animal.prototype.run = function() {
    console.log(`${this.species} is running.`);
  };
  
  // Outputting an entire animal object to the console
  console.log(lion);
  console.log(cat);
  
  // Calling methods on animal objects
  lion.printSound();
  cat.printSound();
  lion.run();
  cat.run();
  