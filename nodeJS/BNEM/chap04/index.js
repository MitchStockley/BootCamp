const express = require("express");
const path = require("path");
const app = new express();
const ejs = require("ejs");   //require ejs page 43
const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost.js');

mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true });

app.set("view engine", "ejs")  //tell express to use EJS as our templating engine page 43

app.use(express.static("public"));
//installing the body parsing middleware - the body parsing middlware parse incomming request bodies in a middleware and make the form data available under the request body property
app.use(express.json())
app.use(express.urlencoded())

app.get('/', async (req, res) => {
  const blogposts = await BlogPost.find({})
  res.render('index', {
    blogposts
  });
})

app.get("/about", (req, res) => {
  // res.sendFile(path.resolve(dirname, "public/pages/about.html"));
  res.render('about');
});
app.get("/contact", (req, res) => {
  // res.sendFile(path.resolve(dirname, "public/pages/contact.html"));
  res.render('contact');
});
app.get('/post/:id', async (req, res) => {
  const blogpost = await BlogPost.findById(req.params.id)
  res.render('post', {
    blogpost
  })
})

//route for create new post
app.get('/posts/new', (req, res) => {
  res.render('create')
})

//post requests 
//here we get the form data from the browser via the request body attribute
app.post('/posts/store', async (req, res) => {
  await BlogPost.create(req.body)
  res.redirect('/')
})


app.listen(4000, () => {
  console.log("App listening on port 4000");
});