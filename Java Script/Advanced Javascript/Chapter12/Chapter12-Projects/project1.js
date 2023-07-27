//Email extractor

let area1 = document.querySelector("textarea[name='txtarea']");
let area2 = document.querySelector("textarea[name='txtarea2']");
let button = document.querySelector("button");

button.addEventListener("click", checkIt);

function checkIt() {
    const txt = area1.value;
    const eData = txt.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);

    let counter = [];
    for (let x = 0; x < eData.length; x++) {
        if (counter.indexOf(eData[x]) == -1) {
            counter.push(eData[x]);
        }

    }

    area2.value = counter.join(',');
}

