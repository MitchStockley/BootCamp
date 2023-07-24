// //Manipulating an array - Project 1

// const theList = ['Laurence', 'Svekis', true, 35, null, undefined, { test: 'one', score: 55 }, ['one', 'two']];

// // Remove the first item and the last item
// theList.shift();
// theList.pop();

// // Add "FIRST" to the start of the array
// theList.unshift("FIRST");

// // Assign "hello World" to the fourth item value (index 3)
// theList[3] = "hello World";

// // Assign "MIDDLE" to the third index value (index 2)
// theList[2] = "MIDDLE";

// // Add "LAST" to the last position in the array
// theList.push("LAST");

// // Output the final array to the console
// console.log(theList);


//Company product catalog - Project 2

let storeItems = []; //Create an array to hold an inventory of store items.
//Create three items//each having the properties of name, model, cost, and quantity

item1 = {
    name: 'iPhone',
    model: 10,
    cost: 400,
    quantity: 1500,
}

item2 = {
    name: 'Car',
    model: 'BMW x5',
    cost: 6000,
    quantity: 100
}
item3 = {
    name: 'Speaker',
    model: `JBL`,
    cost: 50,
    quantity: 150
}

 storeItems.push(item1, item2, item3); //Add all three objects to the main array using an array method
 console.log(storeItems);

 console.log(storeItems[2].quantity); // Access the quantity element of your third item,
 
