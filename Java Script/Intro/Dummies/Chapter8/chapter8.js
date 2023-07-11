let dreamCar = {
    make: "Oldsmobile",
    model: "98",
    color: "brown",
    year: 1983,
    bodyStyle: "Luxury Car",
    price: 4500
    }

   // alert("The type of dreamCar is: " + typeof dreamCar);

    document.getElementById("pricetag").innerHTML = dreamCar.price;
    document.getElementById("modelyear").innerHTML = dreamCar.year;
    document.getElementById("body").style.backgroundColor = dreamCar.color;
    document.getElementById("body").innerHTML = dreamCar.make + " " +dreamCar.model;

    let moveCar = document.getElementById("car");
   

    moveCar.addEventListener("click", moveLeftRight);
   

    function moveLeftRight(e) {
        let physicalCar = e.target;
        let l = 0;
        let animation = setInterval(frame, 10);
        function frame() {
            physicalCar.style.left = l + "%"
            l ++;
            if (l === 22) {
        
                clearInterval(animation);
            }
        }
        
        }

