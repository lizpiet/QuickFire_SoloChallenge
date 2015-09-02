var http = require('http');
var greetings = require('./greetings');

http.createServer(function(req, res){
    res.writeHead(200);
    res.write(greetings.formatDollar()
        + ' ' + greetings.randomNum() + '\n');
    res.end();
}).listen(3000)
