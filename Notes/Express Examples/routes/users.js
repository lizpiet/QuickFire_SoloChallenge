var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    console.log('Someone accessed the users page');
    res.send('This is the users page\n');
});

router.get('/login', function(req,res,next){
    console.log('Someone accessed the login page');
    res.send('This is the login page\n');
});

module.exports = router;