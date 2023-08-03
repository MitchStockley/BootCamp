// window.onload = getMyLocation

// function getMyLocation() {
//     if(navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(displayLocation,displayError);
//     } else {
//         alert("oops, no geo location support");
//     }
// }

// function displayLocation(position) {
//     let lattitude = position.coords.latitude;
//     let longitude = position.coords.longitude;

//     let div = document.getElementById("location");
//     div.innerHTML = "you are at latitude: "+ lattitude + ", longitude: "+ longitude;
// }

// function displayError(error) {
//     let errorTypes = {
//         0: "unknown error",
//         1:"permission denied by user",
//         2:"position is not available",
//         3:"request time out"
//     };
//     let errorMessage = errorTypes[error.code];
//     if(error.code ==0 || error.code ==2) {
//         errorMessage = errorMessage + " " + error.message;
//     }

//     let div = document.getElementById("location");
//     div.innerHTML = errorMessage;
//     }


var options = { enableHighaccuracy: true, timeout: 100, maximumage: 0 };
window.onload = getMyLocation;
function getMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            displayLocation,
            displayError,
            options);
    } else {
        alert("Oops, no geolocation support");
    }
}

function displayError(error) {
    var errorTypes = {
        0: "Unknown error",
        1: "Permission denied",
        2: "Position is not available",
        3: "Request timeout"
    };
    var errorMessage = errorTypes[error.code];
    if (error.code == 0 || error.code == 2) {
        errorMessage = errorMessage + " " + error.message;
    }
    var div = document.getElementById("location");
    div.innerHTML = errorMessage;
    options.timeout += 100;
    navigator.geolocation.getCurrentPosition(
        displayLocation,
        displayError,
        options);
    div.innerHTML += " ... checking again with timeout=" + options.timeout;
}

function displayLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var div = document.getElementById("location");
    div.innerHTML = "You are at Latitude: " + latitude +
        ", Longitude: " + longitude;
    div.innerHTML += " (found in " + options.timeout + " milliseconds)";
}

function scrollMapToPosition(coords) {
    let latitude = coords.latitude;
    let longitude = coords.longitude;
    let latLong = new google.maps.LatLng(latitude, longitude);

    map.panTo(latLong);
    addmarker(map, latLong, "your new location", "you moved to: " + latitude + "," + longitude);
}

function displayLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var div = document.getElementById("location");
    div.innerHTML = "You are at Latitude: " + latitude
        + ", Longitude: " + longitude;
    div.innerHTML += " (with " + position.coords.accuracy + " meters accuracy)";
    var km = computeDistance(position.coords, ourCoords);
    var distance = document.getElementById("distance");
    distance.innerHTML = "You are " + km + " km from the WickedlySmart HQ";
    if (map == null) {
        showMap(position.coords);
    } else {
        scrollMapToPosition(position.coords);
    }
}

var prevCoords = null;
function displayLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var div = document.getElementById("location");
    div.innerHTML = "You are at Latitude: " + latitude + ", Longitude: " + longitude;
    div.innerHTML += " (with " + position.coords.accuracy + " meters accuracy)";
    var km = computeDistance(position.coords, ourCoords);
    var distance = document.getElementById("distance");
    distance.innerHTML = "You are " + km + " km from the WickedlySmart HQ";
    if (map == null) {
        showMap(position.coords);
        prevCoords = position.coords;
    } else {
        let meters = computeDistance(position.coords, prevCoords) * 1000;
        if (meters > 20) {
            scrollMapToPosition(position.coords);
            prevCoords = position.coords;
        }
    }
}