var express = require('express');
var app = express();

var index = require('./routes/index');
var users = require('./routes/users');

app.get('/users/login', function(req,res,next){
    console.log('This is another /users/login url');
    res.send('This is the user login page');
});

app.use('/', index);
app.use('/users', users);
var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('App listening on ', port);
});