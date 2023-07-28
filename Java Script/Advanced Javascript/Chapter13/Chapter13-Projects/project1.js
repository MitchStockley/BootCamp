let words = ["java", "software", "developer", "nodejs"];
let tr = prompt("passsword?");
let td = tr;


function checker(pass) {
    return words.includes(pass);
}

function login(password) {
    return new Promise((resolve, reject) => {
        if (checker(password)) {
            resolve({
                staus: true
            });

        } else {
            reject({
                staus: false
            })
        }
    })

}

function otherChecker(pass) {
    login(pass)
        .then(token => {
            console.log("Aproved");
            console.log(token);
        })
        .catch(value => {
            console.log("Reject");
            console.log(value)
        })
}


otherChecker("java");
otherChecker("1234");

    // otherChecker(td);