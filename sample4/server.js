var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    var info;

    if (req.url === '/') {
        fs.readFile('index.html', function(err, info) {
            res.end(info);
        });
    }

}).listen(1337, '127.0.0.1');

