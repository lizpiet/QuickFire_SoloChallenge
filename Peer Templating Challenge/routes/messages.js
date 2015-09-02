var fs = require('fs');
var express = require('express');
var router = express.Router();
var messages = require('../models/messages.json');
var path = require('path');

router.post('/', function(req, res, next){
    var messagesArray = messages;
    messagesArray.push(req.body);
    console.log(messagesArray);

    var absPath = path.join(__dirname, '../models/messages.json');

    fs.writeFile(absPath, JSON.stringify(messagesArray), function(err){
        if (err){
            console.log(err);
            res.sendStatus(500).send(err);
        } else {
            res.json(messagesArray);
        }
    });
});


module.exports = router;

