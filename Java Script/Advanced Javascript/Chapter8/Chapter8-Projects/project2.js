// Countdown timer
//Create code for a countdown timer that can be executed in the console window, and
// will show the total milliseconds, days, hours, minutes, and seconds remaining until a
// target date is reached


let endDate = "25 dec 2023";

function countDown() {
    const total = Date.parse(endDate) - new Date(); // parse the endDate() and subtract the current date from that end date.
    const days = Math.floor(total / (1000 * 60 * 60 * 24)); // gettingg days,hours,mins,secs from converting the milliseconds
    const hrs = Math.floor((total / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((total / 1000 / 60) % 60);
    const secs = Math.floor((total / 1000) % 60);

    return {
        days, hrs, mins, secs 
    }
}

// Create a function to use a setTimeout() to run the update() function every
// second (1,000 milliseconds). The update() function will create a variable that
// can temporarily hold the object return values of countdown(), and create an
// empty variable that will be used to create the output values.

function update() {
    let temp = countDown();
    let output = "";
    for (const property in temp) {
        output += (`${property}: ${temp[property]} `);

    }
    console.log(output)
    setTimeout(update, 1000)
}

update();

