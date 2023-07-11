// let count = 10;

// while (count > 0) {
//     alert(count);
//     count--
// }
// alert("blast off!");

// let i = 0;
// while (i < 500) {
//     console.log(i + ": Hello Javascript");
//     i++
// }

// Counting with while
// To create a loop that counts, you can just modify a variable inside
// every pass through the loop and use that variable inside other
// statements in the loop.

// let count = 10;
// while(count > 0) {
//     alert(count);
//     count--;
// }
// alert("Blast off!");

// let people = ["Deborah","Carla","Mary","Suzen"];

// let i = 0;
// while (people[i]) {
// alert(people[i]);
// i++;
// }

let money = 20;
let lunches = 0;

//display lunch budget
document.getElementById("money").innerHTML = money;

//listen for order
document.getElementById("placeOrder").addEventListener("click", buyLunches);

/*
buys specified number of sandwiches per day at current prices
*/
function buyLunches() {
    resetForm();
    let day = 0;
    while (money > 0) {
        day++;
        let priceToday = getSandwichPrice();
        let numberOfSandwiches = document.getElementById("numSandwiches").value;
        let totalPrice = priceToday * numberOfSandwiches;


        if (money >= totalPrice) {
            money = money - totalPrice;
            lunches++;
            document.getElementById("receipt").innerHTML += "<p>On day " + day + ", sandwiches are: $" + priceToday + ". You have $" + money.toFixed(2) + " left.</p>";

        } else {
            document.getElementById("receipt").innerHTML += "<p>Today, sandwiches are: $" + priceToday + ". You don't have enough money. Maybe your sister will give you some of her sandwich.</p>";
            money = 0;
        }

    }
    document.getElementById("receipt").innerHTML += "<p>You bought " + lunches + " lunches this week.</p>";

}

/*
gets the current price of sandwiches
*/
function getSandwichPrice() {
    let sandwichPrice = (Math.random() * (1 - 0) + 1).toFixed(2);
    return sandwichPrice;
}

/*
resets the game so that a new order can be placed
*/
function resetForm() {
    money = 20;
    lunches = 0;
    document.getElementById("receipt").innerHTML = "";

}