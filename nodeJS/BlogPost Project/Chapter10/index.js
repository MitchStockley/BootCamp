const express = require('express')

const mongoose = require('mongoose')


const ejs = require('ejs')
const fileUpload = require('express-fileupload')
// const customMiddleWare = (req, res, next) => {
//     console.log('custom middleware called')
//     next()
// }

const validateMiddleware = require("./middleware/validationMiddleware");

const newPostController = require('./controllers/newPost')
const homeController = require('./controllers/home')
const storePostController = require('./controllers/storePost')
const storeUserController = require('./controllers/storeUser')
const newUserController = require('./controllers/newUser')
const getPostController = require('./controllers/getPost')

const app = new express()






app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded())
app.use(fileUpload())
app.use('/posts/store', validateMiddleware)

// app.use(customMiddleWare)


// const BlogPost = require('./models/BlogPost.js')

mongoose.connect('mongodb://127.0.0.1/my_database',
    { useNewUrlParser: true })




app.get('/posts/new', newPostController)


app.get('/', homeController)
app.get('/post/:id', getPostController)
app.post('/posts/store', storePostController)
app.get('/auth/register', newUserController)
app.post('/Users/register', storeUserController)


app.listen(4000, () => {
    console.log('App listening on port 4000')
})

//pg 65