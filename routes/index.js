//Mongoose schema
const User = require("../models/Users")

var express = require('express')
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('home', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
    res.render('loginpage', { title: 'Express' });

});



module.exports = router