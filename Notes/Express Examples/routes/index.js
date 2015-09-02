var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    console.log('Someone accessed the homepage');
    res.send('This is the homepage\n');
});

module.exports = router;