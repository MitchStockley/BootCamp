let output = document.querySelector(".output");
let message = document.querySelector(".message");

message.textContent = "Press to start";
let box = document.createElement('div');
let game = { timer: 0, start: null };
box.classList.add('box');
output.append(box);

box.addEventListener('click', (e) => {
    box.textContent = "";
    box.style.display = 'none';
    game.timer = setTimeout(addBox, ranNum(3000));
    if (!game.start) {
        message.textContent = "Loading";

    } else {
        let cur = new Date().getTime();
        let dur = (cur - game.start) / 1000;
        message.textContent = `It took ${dur} seconds to click`;
    }
})

function addBox() {
    message.textContent = "click it";
    game.start = new Date().getTime();
    box.style.display = 'block';
    box.style.left = ranNum(450) + 'px';
    box.style.top = ranNum(450) + 'px';
}

function ranNum(max) {
    return Math.floor(Math.random() * max);
}

