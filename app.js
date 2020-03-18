

//Connect to MongoDB

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/main', {
    useNewUrlParser: true,
    useUnifiedTopology: true
},console.log("Connected to mongodb server"))



const express = require("express")
var exphbs = require('express-handlebars')
const app = express()
const port = 5001
//var router = app.Router();

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
app.engine('handlebars',exphbs())
app.set('view engine','handlebars')

app.use('/',indexRouter)
app.use('/users', usersRouter);
app.use(passport.initialize)
app.use(passport.session())



app.get("/testing",(req,res)=>{
    res.send("Testing")
})

app.listen(port,()=>console.log("Server is started on port 5001"))
