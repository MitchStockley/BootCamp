//Manipulating HTML elements with JavaScript

/*Select the element with the class output.
2. Create another JavaScript object called mainList and select only the ul tag
that is within the output element. Update the ID of that ul tag to mainList.
3. Search for the tagName of each div, and output them into the console as an
array.
4. Using a for loop, set the ID of each of the div tags to id with a numeric value
of the order they appear within output. Still within the loop, alternate the
color of the contents of each element in output to be red or blue.*/

 var output = document.getElementById("output");
 var mainList = document.querySelector("ul");
 var divs = output.getElementsByTagName("div");
 for (var i = 0; i < divs.length; i++) {
     divs[i].id = "id" + i;
 }
 
console.log(output);

