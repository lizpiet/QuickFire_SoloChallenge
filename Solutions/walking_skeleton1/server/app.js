var express = require('express');
var bodyParser = require('body-parser');
var path=require('path');
var app = express();

//app.get('/', function(req, res){
//    res.send('Hello!');
//});
var index = require('./routes/index');

app.use(express.static(path.join(__dirname,'./public')));

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('Listening on port: ', port);
});

app.use(bodyParser.json());
app.use('/', index);



module.exports = app;
