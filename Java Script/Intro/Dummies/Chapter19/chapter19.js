//Global variables

// create days of week array
// define types of weather
// set min and max temperatures
// cost (to you) of a cup of lemonade
// array for storing daily temps

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let weather = ["sunny", "partly sunny", "partly cloudy", "cloudy", "raining", "snowing", "thunderstorm", "foggy"];
let maxTemp = 100;
let minTemp = 0;

let lemonadeCost = 0.5;
let dailyTemp = [];

document.getElementById("OpenTheStand").addEventListener("click", openTheStand);


generateWeather();
//generates weather for the week

function generateWeather() {

    let weatherToday;
    let tempToday;

    for (let i = 0; i < days.length; i++) {

        weatherToday = weather[Math.floor(Math.random() * weather.length)];
        tempToday = tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
        dailyTemp[i] = tempToday;
        document.getElementById("5DayWeather").innerHTML += "<div id='" + days[i] + "' class='" + weatherToday +
            "'><b>Forecast for " + days[i] + ":</b><br><br>" + weatherToday + " and " + tempToday + " degrees.</div > ";
    }
}

//calculates glasses of lemonade sold

function openTheStand() {

    let glassesSold = 0; // daily
    let totalGlasses = 0; // weekly
    let glassesLeft = 0; // left to sell
    // clear previous results
    resetForm();
    // get input
    let numGlasses = Number(document.getElementById("numGlasses").value);
    let glassPrice = Number(document.getElementById("glassPrice").value);

    for (let i = 0; i < days.length; i++) {
        glassesSold = Math.floor(dailyTemp[i] / glassPrice);
        // how many glasses do we have now?
        glassesLeft = numGlasses - totalGlasses;
    if (glassesSold > glassesLeft) {
        glassesSold = glassesLeft;

    }
    // increase the weekly total
    totalGlasses = glassesSold + totalGlasses;
    // display daily total
    document.getElementById("result").innerHTML += "<p>" + days[i] + ", you sold " + glassesSold + " glasses of lemonade.</p>"

    displayResults(numGlasses, glassPrice, totalGlasses);


}
}

//resets the game so that a new order can be placed
function resetForm() {

    document.getElementById("result").innerHTML = "";

}

// calculates results and displays a report
function displayResults(weeklyInventory, glassPrice, glassesSold) {
    let revenue = glassesSold * glassPrice;
    let expense = weeklyInventory * lemonadeCost;
    let leftOver = weeklyInventory - glassesSold;
    let profit = revenue - expense;
    // print out the weekly report

    //document.getElementById("result").innerHTML += "<p>You sold a total of " + glassesSold + " glasses of lemonade today.</p > ";
    document.getElementById("result").innerHTML += "<p>Total revenue:$" + revenue + ".</p>";
    document.getElementById("result").innerHTML += "<p>You have " + leftOver + " glasses of lemonade left over.</p>";
    document.getElementById("result").innerHTML += "<p>Each glass costs you $" + lemonadeCost + ". Your profit was $"+ profit + ".";
    




}


//document.getElementById("result").innerHTML += "<p>Each glass costs you $" + lemonadeCost + ". Your profit was $"+ profit + ".";