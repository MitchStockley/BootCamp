//Menu items price calculator

//Create a class that contains the prices of two menu items as private field
// declarations





class menuItems {
    #offer1 = 23; //price of item 
    #offer2 = 25; //how many times it was ordered
    constructor(val1, val2) { //argument values for how many times the item was purchased
        this.val1 = val1;
        this.val2 = val2;
    }
    costprice() { //method to calculate the cost of the item and return total cost
        return (this.val1 * this.#offer1) + (this.val2 * this.#offer2);
    }

    get Total() { //getter property use to grab the value output from the above method.
        return this.costprice();
    }
}

let val1 = new menuItems(2, 5); //objects with different combos of menu selections //i.e they ordered 2 offer 1s and 5 offer 2s
let val2 = new menuItems(1, 3); //objects with different combos of menu selections
let val3 = new menuItems(5, 6); //objects with different conmos of menu selections

console.log(val1.Total);
console.log(val2.Total);
console.log(val3.Total);