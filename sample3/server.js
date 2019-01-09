var http = require('http');
var url = require('url');

http.createServer(function(req, res) {
    var urlParsed = url.parse(req.url, true);

    if (urlParsed.pathname === '/echo' && urlParsed.query.message) {
        res.end(urlParsed.query.message);
    } else {
        res.statusCode = 404;
        res.end('Page not found');
    }

    res.end();

}).listen(1337, '127.0.0.1');