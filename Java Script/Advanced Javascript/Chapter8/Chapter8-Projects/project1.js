//Word scrambler


let word = "javascript";

function scrambler(val) {
    let max = val.length;
    let temp = "";
    for (let i = 0; i < max;i ++) {
        console.log(val.length);
        let index = Math.floor(Math.random() * val.length);
        temp += val[index];
        console.log(temp);
        val = val.substr(0,index) + val.substr(index + 1);
        console.log(val);

             
}
return temp;
}

console.log(scrambler(word));

