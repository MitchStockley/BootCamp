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

class Person {                                              //The getter is used to get the property. Therefore, it doesn't take any parameters, but simply returns the property.

    #firstname;
    #lastname;
    constructor(firstname, lastname) {
        this.#firstname = firstname;
        this.#lastname = lastname;

    }
    set firstname(firstname) {
        if (firstname.startsWith("M")) {
            this.#firstname = firstname;
        } else {
            this.#firstname = "M" + firstname;
        }
    }

    get firstname() {
        return this.#firstname;
    }
    set firstname(firstname) {
        this.#firstname = firstname;
    }
    get lastname() {
        return this.#lastname;
    }
    set lastname(lastname) {
        this.#lastname = lastname;
    }

}

let p = new Person("Maria", "Saga");
console.log(p.firstname);

p.firstname = "Adnane";

console.log(p.firstname);



