var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next) {
    res.render('userpage', { title: 'Express' });
});


router.get('/test', function(req, res, next) {
    res.send('Made it to /users/test')
})

router.get('/getuser', async function(req,res,next){
    let user = await User.findOne({username:"dome123"})
    console.log(user.password)
    res.json(user)
})

module.exports = router