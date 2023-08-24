"use strict";

const express = require("express"), //require express
app = express(), //Initiate the express application
homeController = require("./controllers/homeController"),
errorController = require("./controllers/errorController"),
subscribersController = require("./controllers/subscribersController"),
layouts = require("express-ejs-layouts"); //Require the express-ejs-layouts module.


const mongoose = require("mongoose");
mongoose.connect(
    "mongodb://localhost:27017/confetti_cuisine",
    { useNewUrlParser: true }
);

mongoose.set("useCreateIndex", true);

app.set("view engine", "ejs"); //Set the application to use ejs.
app.set("port", process.env.PORT || 3000);

/* The json and urlencoded Express.js middleware functions will be used as middleware
that interpret incoming request bodies for me. */
app.use(
    express.urlencoded({ //Tell the Express.js app to use body-parser for processing URL encoded and JSON parameters.
        extended: false
    })
);
app.use(express.json());

app.use(layouts); //Set the application to use the layout module
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
});

/* Add routes for the courses
page, contact page, and
contact form submission. */
app.get("/subscribers", subscribersController.getAllSubscribers);
app.get("/contact", subscribersController.getSubscriptionPage);
app.post("/subscribe", subscribersController.saveSubscriber);
app.get("/courses", homeController.showCourses);
app.post("/contact", homeController.postedSignUpForm);


//Add error handlers as middleware functions.
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);



//create a route for the home page
// app.get("/", (req, res) => {
//     res.send("Welcome to Confetti Cuisine!");
// });

//set app to run on port 3000
app.listen(app.get("port"), () => {
    console.log(
        `Server running at http://localhost:${app.get(
            "port"
        )}`
    );
});



