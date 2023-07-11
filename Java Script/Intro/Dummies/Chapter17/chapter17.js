// for (let counter =0; counter < 500; counter++) {

//     console.log(counter + ": hello, Javascript");
// }

// for (let i = 10; i > 0; i--) {
//     alert(i);
// }
// alert("Blast Off!");

// let myFriends = ["Agatha", "Agnes", "Jermaine", "jack"];

// for (let i = 0; i < myFriends.length; i ++) {
//     alert(myFriends[i] + " is my friend");
// }

// //If you want a random number between 10 and 1,000, you can
// multiply the random value by the result of subtracting the small-
// est number from the largest number and then adding the smaller
// number to that result, like this:

//alert(Math.floor(Math.random() * (1000 - 100) + 100));

// let myFriends = ["Agatha", "Agnes", "Jermaine", "jack"];

// let randomFriend = Math.floor(Math.random() * myFriends.length);
// alert(myFriends[randomFriend]);

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let weather = ["Sunny", "Partly Sunny", "Partly Cloudy",
    "Cloudy", "Raining", "Snowing", "Thunderstorm",
    "Foggy"];

let minTemp = 0;
let maxTemp = 100;
generateWeather();

function generateWeather() {
    for (let i = 0; i < days.length; i++) {
        let weatherToday = weather[Math.floor(Math.random() * weather.length)];
        let tempToday = Math.floor(Math.random() * (maxTemp - minTemp) +
            minTemp);

        document.getElementById("5DayWeather").innerHTML += "<div id='" + days[i] + "' class='" + weatherToday + "'><b>Forecast for " + days[i] + ":</b><br><br>"
            + weatherToday + " and " + tempToday + " degrees.</div>";
    }
}

