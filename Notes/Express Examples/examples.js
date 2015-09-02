var express = require('express');
var app = express();

// GET url /
app.get('/', function(req, res, next){
    // listen to request, send data to response
    res.send('GET request to the homepage');
});


// GET /about
app.get('/about', function(req, res, next){
    // listen to request, send data to response
    res.send('GET request to the homepage');
});

// GET respond to /random.text
app.get('/random.text', function(req, res, next){
    // listen to request, send data to response
    res.send('GET request to the homepage');
});

// will match abcd, abbcd, abbbcd, and so on
app.get('/ab+cd', function(req, res, next){
    // listen to request, send data to response
    res.send('GET request to the homepage');
});

// will match abcd, abxcd, abRANDOMcd, ab123cd
app.get('/ab*cd', function(req, res, next){
    // listen to request, send data to response
    res.send('GET request to the homepage');
});

// will match abe, abcde
app.get('/ab(cd)?e', function(req, res, next){
    // listen to request, send data to response
    res.send('GET request to the homepage');
});

// will match /user /users
app.get('/user(s)?', function(req, res, next){
    // listen to request, send data to response
    res.send('GET request to the homepage');
});


// Example /any/path/ever
app.get('/*', function(req, res, next){
    // listen to request, send data to response
    res.send('GET request to anything');
});

// will match butterflu, dragonfly, but not butterflyman dragonflyman and so on
app.get('/.*fly$/',function(req,res,next){

});

// a route can be handled using a single callback function
app.get('/example/a', function(req,res,next){
    res.send('Hello from a');
});

// a route can be handled using more than one callback
app.get('/example/b', function(req,res,next){
    console.log('response will be sent by the next function');
    next()
}, function(req,res){
    res.send('Hello from b');
});

var cb0 = function(req,res,next){
    console.log('cb0');
    next();
};
var cb1 = function(req,res,next){
    console.log('cb1');
    next();
};
var cb2 = function(req,res,next){
    console.log('cb2');
    res.send('Hello from cbs');
};

// a route can handle an array of functions
app.get('/cbs', [cb0, cb1, cb2]);

// a route can hanlde any combination of arrays and functions
app.get('/more/cbs', [cb0, cb1], function(req,res,next){
    console.log('Response will be sent by the next function');
    next();
}, function(req,res,next){
    res.send('Hello from more cbs');
});

// POST, PUT, DELETE


app.post('/', function(req,res,next){
    res.send('POST request to the homepage');
});

app.put('/', function(req,res,next){
    res.send('PUT request to the homepage');

});

app.delete('/', function(req,res,next){
    res.send('DELETE request to the homepage');

});


// response methods
app.get('/response/example/', function(req, res, next){
    res.download();
    res.end();
    res.json();
    res.jsonp();
    res.redirect();
    res.render();
    res.send();
    res.sendFile();
    res.sendStatus();
});

// route allows us to chain request methods to a single path
app.route('/book')
  .get(function(req,res,next){
    res.send('Get a book!');
}).post(function(req,res,next){
    res.send('Add a book!');
}).put(function(req,res,next){
    res.send('Update a book!');
}).delete(function(req,res,next){
    res.send('Delete a book!');
});



var server = app.listen(3000, function(){
    var port = server.address().port;

    console.log('Example app listening at ', port);
});