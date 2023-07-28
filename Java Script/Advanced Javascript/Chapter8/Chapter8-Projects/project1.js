//Word scrambler
//Create a function that returns a value of a word and scrambles the letter order with
// Math.random():


let word = "javascript";

function scrambler(val) {
    let max = val.length;
    let temp = ""; //temp string to hold new scrambled word value
    for (let i = 0; i < max;i ++) { // forloop iterates num of letters within the string parametor
        console.log(val.length);
        let index = Math.floor(Math.random() * val.length); //random generator 
        temp += val[index]; //selects one letter using index value
        console.log(temp);
        val = val.substr(0,index) + val.substr(index + 1); //adding it to the remaining string value from the index plus one onward.
        console.log(val);

             
}
return temp; // Output the new original string value with the removed characters.
}

console.log(scrambler(word)); // final result and invokes the function

