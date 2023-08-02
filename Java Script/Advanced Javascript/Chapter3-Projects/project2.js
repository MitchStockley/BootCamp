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
 
