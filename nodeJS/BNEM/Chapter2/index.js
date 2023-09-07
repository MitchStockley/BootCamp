
//introduction to express//creating basic web server with express
const express = require('express')
const app = express() //calls express function to start new express app
app.listen(3000,() => {
    console.log("App listening on port 3000")
})

//handeling requests with express 