// let s = `Hello`;
// console.log(s.concat(" there!").toUpperCase().replace("THERE","Legend").concat(" you are amazing!"));  //concat adds "there!" to the variable S 


// //isNaN //isNaN returns true when it isn't a number

// let x = "7";
// console.log(Number.isNaN(x));

// //You can also write:

// console.log(isNaN(x));


//Decoding and encoding URIs
//URI (uniform resource identifier) is an identifier of
// a certain resource. URL (uniform resource locator) 
// is a subcategory of URI that is not
// // only an identifier, 
// but also holds the information on how to access it (location).

// let uri = "https://www.example.com/submit?name=maaike van putten";
// let encodedUri = encodeURI(uri); //encodes uri (fills gaps with %20)
// console.log(encodedUri);

// let decodedUri = decodeURI(encodedUri);  //decodes uri
// console.log(decodedUri);

// let encodedString = "How's%20it%20going%3F";
// let decodedString = decodeURIComponent(encodedString);
// console.log(decodedString);
// encodedString = encodeURIComponent(decodedString);
// console.log(encodedString);

// let webUri = "http://www.basescripts.com?=Hello World";
// let encodedWebUri = encodeURI(webUri);
// console.log(encodedWebUri);


// let str_float = "7.6";
// let int_float = Number(str_float); //converting string to number 
// console.log("Type of", int_float, "is", typeof int_float);





//Similarly, we can use parseFloat() to parse a string to a float

// let str_float = "7.6.";
// let float_float = parseFloat(str_float);
// console.log("Type of", float_float, "is", typeof float_float);


//**Executing JavaScript with eval() */
//This global method executes the argument as a JavaScript statement


//Array methods


let arr = ["grapefruit", 4, "hello", 5.6, true];

function printStuff(element,index) {

    console.log("printing stuff: ", element," on array position", index);
}

