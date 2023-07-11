// let arr = ["hi there", 5, true];
// console.log(typeof arr[0]);
// console.log(typeof arr[1]);
// console.log(typeof arr[2]);

// const arr = ["hi there"];
// arr[0] = "new value";
// console.log(arr[0]);
// arr = ["nope, now you are overwriting the array"];

//Accessing elements

// cars = ["Toyota", "Renault", "Volkswagen"];
// console.log(cars[0]);
// console.log(cars[-1]); //We didn't assign a value to the negative or non-existent index, so when we ask for
// it, the value is undefined. As such, the log output will be undefined. JavaScript does
// not throw an error because of this

//Overwriting elements

// The elements in an array can be overwritten. This can be done by accessing a certain
// element using the index and assigning a new value:

// cars[0] = "Tesla";
// console.log(cars[0]);
// console.log(cars);
// cars[3] = "Kia";
// cars[-1] = "Fiat";
// console.log(cars[3]);
// console.log(cars[-1]);

// Built-in length property

// colors = ["black", "orange", "pink"]
// booleans = [true, false, false, true];
// emptyArray = [];

// console.log("Length of colors:", colors.length);
// console.log("Length of booleans:", booleans.length);
// console.log("Length of empty array:", emptyArray.length);

// //You get the highest index by subtracting 1 from the length because, as you know,
// //arrays are zero-indexed.
// lastElement = colors[colors.length - 1]; 

// numbers = [12, 24, 36];
// numbers[5] = 48;
// console.log(numbers.length);
// console.log("numbers", numbers);

// shoppingList = ["Milk", "Bread", "Apples"];
// console.log(shoppingList.length);
// shoppingList[1] = "Banana";
// console.log(shoppingList);

//Adding and replacing elements
//We can add elements with the push() method:

// favoriteFruits = ["grapefruit", "orange", "lemon"];
// favoriteFruits.push("tangerine");
// let lengthOfFavoriteFruits = favoriteFruits.push("lime");
// console.log(favoriteFruits);

// let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
// arrOfShapes.splice(2, 0, "square", "trapezoid");
// console.log(arrOfShapes);
// arrOfShapes.splice(2, 12, "square", "trapezoid");
// console.log(arrOfShapes);

// let arr5 = [1, 2, 3];
// let arr6 = [4, 5, 6];
// let arr7 = arr5.concat(arr6);
// console.log(arr7);
// let arr8 = arr7.concat(7, 8, 9);
// console.log(arr8);

// //Deleting elements
// arr8.pop();
// console.log(arr8);
// arr8.shift();
// console.log(arr8);
// arr8.splice(1, 3);
// console.log(arr8);
// delete arr8[0];
// console.log(arr8);

// Finding elements

// arr8 = [ 2, 6, 7, 8 ];
// let findValue = arr8.find(function(e) { return e === 6});
// let findValue2 = arr8.find(e => e === 10);
// console.log(findValue, findValue2);

// arr8 = [ 2, 6, 7, 8 ];
// let findIndex = arr8.indexOf(6);
// let findIndex2 = arr8.indexOf(10);
// console.log(findIndex, findIndex2);
// let findIndex3 = arr8.indexOf(6, 2);

// let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
// names.sort();
// console.log(names);
// names.reverse();
// console.log(names);

// shoppingList =[];
// shoppingList.push("Milk","bread","apples");
// shoppingList.splice(1,1,"bananas","eggs");
// console.log(shoppingList.pop());
// shoppingList.sort();
// console.log(shoppingList);
// let index = shoppingList.indexOf("bananas");
// index += 1;
// shoppingList.splice(index,0,"Carrots","Lettuce");
// let list2=["Juice","Pop"];
// shoppingList = shoppingList.concat(list2,list2);
// console.log(shoppingList.lastIndexOf("Pop"));
// console.log(shoppingList);


//Multidimensional arrays

// let someValues1 = [1, 2, 3];
// let someValues2 = [4, 5, 6];
// let someValues3 = [7, 8, 9];
// let arrOfArrays = [someValues1, someValues2, someValues3];

// let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let value1 = arrOfArrays[0][1];
// let value2 = arrOfArrays[2][2];

//Objects in JavaScript
// let arr = [0, 1, 2];
// console.log(typeof arr);

// let dog = { dogName: "JavaScript",
// weight: 2.4,
// color: "brown",
// breed: "chihuahua",
// age: 3,
// burglarBiter: true
// };

// let dogColor1 = dog["color"];
// console.log(dogColor1);
// let dogColor2 = dog.color;
// console.log(dogColor2);

// //Updating objects
// dog["color"] = "blue";
// dog.weight = 2.3;
// console.log(dog);
// let variable = "age";
// console.log(dog[variable]);

//Objects in objects

// let company = {
//     companyName: "Healthy Candy",
//     activity: "food manufacturing",
//     address: {
//         street: "2nd street",
//         number: "123",
//         zipcode: "33116",
//         city: "Miami",
//         state: "Florida"
//     },
//     yearOfEstablishment: 2021
// };

//To access or modify one of the properties of the address here, we can use two
//approaches

// company.address.zipcode = "33117";
// company["address"]["number"] = "100";

//Arrays in objects

// company = {
//     companyName: "Healthy Candy",
//     activities: ["food manufacturing",
//         "improving kids' health", "manufacturing toys"],
//     address: {
//         street: "2nd street",
//         number: "123",
//         zipcode: "33116",
//         city: "Miami",
//         state: "Florida"
//     },
//     yearOfEstablishment: 2021
// };

// let activity = company.activities[1];

//Objects in arrays

// let addresses = [{
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida"
// },
// {
//     street: "1st West avenue",
//     number: "5",
//     zipcode: "75001",
//     city: "Addison",
//     state: "Texas"
// }];

// let streetName = addresses[0].street;
// console.log(streetName);

//Objects in arrays in objects

// company = {
//     companyName: "Healthy Candy",
//     activities: ["food manufacturing",
//         "improving kids' health", "manufacturing toys"],
//     address: [{
//         street: "2nd street",
//         number: "123",
//         zipcode: "33116",
//         city: "Miami",
//         state: "Florida"
//     },
//     {
//         street: "1st West avenue",
//         number: "5",
//         zipcode: "75001",
//         city: "Addison",
//         state: "Texas"
//     }],
//     yearOfEstablishment: 2021
// };


// let streetName = company.address[0].street;
// console.log(streetName);

// let people = {friends:[]};
// let friend1 = {fname:"Anna", lname:"Jonesy", Id:1000};
// let friend2 = {fname:"Ane", lname:"Jonesie", Id:1500};
// let friend3 = {fname:"Annea", lname:"Jones", Id:10090};
// people.friends.push(friend1,friend2,friend3);
// console.log(people);  

const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']];

theList.shift();
console.log(theList);



