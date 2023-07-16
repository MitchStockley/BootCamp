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
//Performing a certain action for every item

// let arr = ["grapefruit", 4, "hello", 5.6, true];

// function printStuff(element,index) {

//     console.log("printing stuff: ", element," on array position", index);
// }
// arr.forEach(printStuff);


//Filtering an array
// We can use the built-in filter() method on an array to alter which values are in the
// array. The filter method takes a function as an argument, and this function should
// return a Boolean. If the Boolean has the value true, the element will end up in the
// filtered array. If the Boolean has the value false, the element will be left out. You can
// see how it works here:

// let arr = ["squirrel", 5, "Tjed", new Date(), true];
// function checkString(element, index) {
// return typeof element === "string";
// }
// let filterArr = arr.filter(checkString);
// console.log(filterArr);


//Checking a condition for all elements
//You can use the every() method to see whether something is true for all elements
// in the array. If that is the case, the every() method will return true, else it will
// return false.

// console.log(arr.every(checkString)); //This will log false, since not all elements are of type string in the array.



//Replacing part of an array with another part of the array

//The copyWithin() method can be used to replace a part of the array with another
// part of the array.

// arr = ["grapefruit", 4, "hello", 5.6, true];
// arr.copyWithin(0,3,4); //specifying 3 arguments // target positio where values get copied, 2nd is start of what to copy to target position,3rd is the end of the sequence that will be copied to target position 

//If we specify a range with length 2, the first two elements after the starting position
// get overridden

// arr = ["grapefruit", 4, "hello", 5.6, true,"cat"];
// arr.copyWithin(0,3,5);
// console.log(arr);

//We can also not specify an end at all; it will take the range to the end of the string:

// let arr = ["grapefruit", 4, "hello", 5.6, true, false];
// arr.copyWithin(0,3);      //It is important to keep in mind that this function changes the content of the original array, but will never change the length of the original array.
// console.log(arr);


//Mapping the values of an array

// Sometimes you'll need to change all the values in an array. With the array map()
// method you can do just that. This method will return a new array with all the new
// values. 

//This can be done with the
// arrow function. It is going to execute the arrow function for every element in the
// array, so for example:

// let arr = [1,2,3,4];
// let mapped_arr = arr.map(x => x + 1);
// console.log(mapped_arr);

//Finding the last occurrence in an array

//We can find occurrences with indexOf() as we have seen already. To find the last
// occurrence, we can use the lastIndexOf() method on an array, just as we did for
// string.
//It will return the index of the last element with that value, if it can find it at all

// let bb = ["so", "bye", "bye", "love"];
// console.log(bb.lastIndexOf("bye"));
// console.log(bb.lastIndexOf("hi")); // returns -1 if value not in the array

//Practice exercise 8.2
//Remove duplicates from the array using filter() and indexOf(). The starting array
// is:

// let arr = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike",
//     "Laurence", "Mike", "Laurence", "Mike"];

//     let arr2 = arr.filter( (value,index,array) => {
//         console.log(value,index,array.indexOf(value));
//         return array.indexOf(value) === index;

//     });

//     console.log(arr2);


 //Practice exercise 8.3
 //Using the array map() method, update an array's contents. Take the following steps

//  let arr = [1,2,3,4,5];
//  let mapped_arr = arr.map(x => x * 2); //multiplies each num in array by two and returns the new array
//  console.log(mapped_arr);

//String methods
//Combining strings

//When you want to concatenate strings, you can use the concat() method.
// let s1 = "Hello ";
// let s2 = "JavaScript";
// let result = s1.concat(s2);
// console.log(result);

//Converting a string to an array
//With the split() method we can convert a string to an array

// let result = "Hello JavaScript";
// let arr_result = result.split(" ");
// console.log(arr_result);

// //Converting an array to a string
// //With the join() method you can convert an array to a string. Here is a basic
// //example:

// let letters = ["a", "b", "c"];
// let x = letters.join();
// console.log(x);


//Working with index and positions
// Here is an example of
// how to find the index of a string. The indexOf() method returns the index, a single
// number, of the first character of the substring:

 //let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
// let index_re = poem.indexOf("re");
// console.log(index_re); // returns 7, found in 7th index ["re"] in "are"

// let indexNotFound = poem.indexOf("python");
// console.log(indexNotFound); // return -1 if not found in array

// if (poem.indexOf("python") != -1) {
//  // do stuff 
// }


//search() method:
// let searchStr = "When I see my fellow, I say hello";
// let pos = searchStr.search("lo");
// console.log(pos);

// let notFound = searchStr.search("JavaScript");
// console.log(notFound);

// let lastIndex_re = poem.lastIndexOf("re");
// console.log(lastIndex_re); // find the last index of the "re"


// let pos1 = poem.charAt(10);
// console.log(pos1); //shows what character is at a certain index position



//Replacing parts of the string
//use the replace(old, new)
// method. It takes two arguments, one string to look for in the string and one new
// value to replace the old value with. Here is an example:

// let hi = "Hi buddy";
// let new_hi = hi.replace("buddy", "Pascal");
// console.log(new_hi);

// //The start and end of a string

// let encouragement = "You are doing great, keep up the good work!";
// let bool_start = encouragement.startsWith("You");
// console.log(bool_start);



//Number methods
// This can be done with isNaN().
// let x = 34;
// console.log(isNaN(x));
// console.log(!isNaN(x));
// let str = "hi";
// console.log(isNaN(str));

// Checking if something is finite
// let x = 3;
// let str = "finite";
// console.log(isFinite(x));
// console.log(isFinite(str));
// console.log(isFinite(Infinity));
// console.log(isFinite(10 / 0));

//Specifying a number of decimals

// let x = 1.23456;
// let newX = x.toFixed(2);

// let x = 1.23456;
// let newX = x.toFixed(3);
// console.log(x, newX);

// let x = 1.23456;
// let newX = x.toPrecision(4);
// console.log(newX);


//Math methods
//Finding the highest and lowest number

// let highest = Math.max(2, 56, 12, 1, 233, 4);
// console.log(highest);

// let lowest = Math.min(2, 56, 12, 1, 233, 4);
// console.log(lowest);

// let highestOfWords = Math.max("hi", 3, "bye");
// console.log(highestOfWords); // returns nan

//Square root and raising to the power of

// let result = Math.sqrt(64);
// console.log(result);

// let result2 = Math.pow(5, 3);
// console.log(result2); // 5 to the power of 3 

//Turning decimals into integers

// let x = 6.78;
// let y = 5.34;
// console.log("X:", x, "becomes", Math.round(x));  //becomes 7
// console.log("Y:", y, "becomes", Math.round(y));  //becomes 6

// console.log("X:", x, "becomes", Math.ceil(x)); // rounds up
// console.log("Y:", y, "becomes", Math.ceil(y)); //rounds up

//Exponent and logarithm
//The exponent is the number to which a base is being raised. We use e (Euler's
// number) a lot in mathematics, this is what the exp() method in JavaScript does. It
// returns the number to which e must be raised to get the input. We can use the exp()
// built-in method of Math to calculate the exponent, and the log() method to calculate
// the natural logarithm. You can see an example here:

// let x = 2;
// let exp = Math.exp(x);
// console.log("Exp:", exp);
// let log = Math.log(exp);
// console.log("Log:", log);

// //Exp: 7.38905609893065
// //Log: 2


// //Date methods
// //In order to work with dates in JavaScript we use the built-in Date object. This object
// // contains a lot of built-in functions to work with dates

// //Creating dates

// // let currentDateTime = new Date();
// // console.log(currentDateTime); //logs current date and time

// let now2 = Date.now();
// console.log(now2)

// let milliDate = new Date(1000);
// console.log(milliDate);

// let stringDate = new Date("Sat Jun 05 2021 12:40:12 GMT+0200");
// console.log(stringDate);

// let specificDate = new Date(2022, 1, 10, 12, 10, 15, 100);
// console.log(specificDate); //pecify a certain date using the constructor:



// Methods to get and set the elements of a date

// let d = new Date();
// console.log("Day of week:", d.getDay());
// console.log("Day of month:", d.getDate());
// console.log("Month:", d.getMonth());
// console.log("Year:", d.getFullYear());
// console.log("Seconds:", d.getSeconds());
// console.log("Milliseconds:", d.getMilliseconds());
// console.log("Time:", d.getTime());

// d.setFullYear(2010);
// console.log(d);


//Parsing dates

//With the built-in parse() method we can parse epoch dates from strings. It accepts
// many formats, but again you will have to be careful with the order of days and
// months:

// let d1 = Date.parse("June 5, 2021");
// console.log(d1); //1622851200000

let d = new Date();
console.log(d.toDateString()); // converting date to a string

 





