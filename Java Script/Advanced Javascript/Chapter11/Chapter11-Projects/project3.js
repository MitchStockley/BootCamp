//Mouse position tracker 


let els = document.querySelector(".container");

els.addEventListener("mouseover",
 (e) => {
    e.target.classList.add('active');
})

els.addEventListener('mouseout',
 (e) => {
    e.target.classList.remove('active');
})

els.addEventListener('mousemove', coordin);

function coordin() {
    let html = "X:" + event.clientX + " | Y:" + event.clientY;
    document.getElementById("output").innerHTML = html;
    }