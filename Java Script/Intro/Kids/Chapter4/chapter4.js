/* 
let cat = {
    "legs": 3,
    "name": "Harmony",
    "color": "Tortoiseshell"
    };

    */

    



/*dinosaurs = [
    { name: "Tyrannosaurus Rex", period: "Late Cretaceous" },
    { name: "Stegosaurus", period: "Late Jurassic" },
    { name: "Plateosaurus", period: "Triassic" }
   ];

   console.log(dinosaurs[1].name);
   */

   /*
   
An Array of friends An Array of friends
Let’s look at a more complex example now. We’ll create an array of
friend objects, where each object also contains an array. First, we’ll
make the objects, and then we can put them all into an array: BELOW CODE
*/


/*
let anna = { name: "Anna", age: 11, luckyNumbers: [2, 4, 8, 16] };
let dave = { name: "Dave", age: 5, luckyNumbers: [3, 9, 40] };
let kate = { name: "Kate", age: 9, luckyNumbers: [1, 2, 3] };
*/

/* First, we make three objects and save them into variables
called anna, dave, and kate. Each object has three keys: name, age,
and luckyNumbers. Each name key has a string value assigned to it,
each age key has a single number value assigned to it, and each
luckyNumbers key has an array assigned to it, containing a few dif-
ferent numbers.
Next we’ll make an array of our friends: */

/*
let friends = [anna,dave,kate];

console.log(friends[1].luckyNumbers[2]);
console.log(friends);
*/

/*You can use an object as a way of linking a string and a value
together. In this case, the string would be your friend’s name, and
the value would be the amount of money he or she owes you. Let’s
have a look.*/

/*
let owedMoney = {};
owedMoney["Jimmy"] = 5;
owedMoney["Anna"] = 7;
owedMoney.Jimmy += 5;
owedMoney.Anna -= 4;

console.log(owedMoney["Jimmy"]);
console.log(owedMoney["Anna"]);
*/

/*Storing Information About Your Movies
Let’s say you have a large collection of movies on DVD and Blu-ray.
Wouldn’t it be great to have the information about those movies on
your computer so you can find out about each movie easily?
You can create an object to store information about your movies,
where every key is a movie title, and every value is another object
containing information about the movie. Values in objects can be
objects themselves! - BELOW!
*/

/*let movies = {
    "Finding Nemo": {
    releaseDate: 2003,
    duration: 100,
    actors: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
    format: "DVD"
    },
    "Star Wars: Episode VI - Return of the Jedi": {
    releaseDate: 1983,
    duration: 134,
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    format: "DVD"
    },
    "Harry Potter and the Goblet of Fire": {
    releaseDate: 2005,
    duration: 157,
    actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    format: "Blu-ray"
    }
    };
    let FindingNemo = movies["Finding Nemo"];
    console.log(FindingNemo.duration);
    console.log(FindingNemo.format); */

    /*
    Here we save the movie information about Finding Nemo into
    a variable called findingNemo. We can then look at the properties of
    this object (like duration and format) to find out about the movie.
    You can also easily add new movies to your collection -BELOW (FOR ABOVE OBJECTS)
*/

    /*let cars = {
        releaseDate : 2006,
        duration: 117,
        actors: ["Owen Wilson", "Bonnie Hunt", "Paul Newman"],
        format: "Blu-ray"
    }

    movies["Cars"] = cars;
    console.log(movies);
    */

    /*Here we create a new object of movie information about Cars.
    We then insert this into the movies object, under the key "Cars".
    Now that you’re building up your collection, you might want to
    find an easy way to list the names of all your movies. That’s where
    Object.keys comes in:*/

    /*console.log(Object.keys(movies));
    console.log(Object.values(movies)); */

    //CHALLENGE

    /* 
    let myCrazyObject = {
        "name": "A ridiculous object",
        "some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
        "random animal": "Banana Shark"
        };
        */

        /*How would you get the number 123 out of this object
using one line of JavaScript? Try it out in the console to see
if you’re right.*/

//console.log(myCrazyObject["some array"][2].number);
//console.log(myCrazyObject["some array"][3]);

/*
let scores = {
    Mitch: 0,
    James: 0,
    Tom: 0
};

scores.Mitch +=1;
scores.James +=1;
scores.Tom +=1;

console.log(scores);
*/


