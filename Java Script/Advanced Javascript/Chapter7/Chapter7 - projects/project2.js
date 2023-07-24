//Menu items price calculator

//Create a class that contains the prices of two menu items as private field
// declarations


        
    

class menuItems {
    #offer1 = 23;
    #offer2 = 25;
    constructor(val1,val2) {
        this.val1 = val1;
        this.val2 = val2;
    }
    costprice() {
        return(this.val1 * this.#offer1) + (this.val2 * this.#offer2);
    }

    get Total() {
        return this.costprice();
    }
}

let val1 = new menuItems(2,5);
let val2 = new menuItems(1,3);
let val3 = new menuItems(5,6);

console.log(val1.Total);

console.log(val2.Total);

console.log(val3.Total);