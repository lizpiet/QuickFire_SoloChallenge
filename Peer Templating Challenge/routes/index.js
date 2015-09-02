var express = require('express');
var router = express.Router();
var memes = require('../models/memes.json');
var messages = require('../models/messages.json');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { memes: memes, messages: messages });
});

module.exports = router;
