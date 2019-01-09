var http = require('http');
var fs = require('fs');
var chat = require('./chat');

http.createServer(function(req, res) {
    switch(req.url) {
        case '/':
            sendFile('index.html', res);
            break;
        case '/subscribe':
            chat.subscribe(req, res);
            break;
        case '/publish':
            var body = '';

            req
                .on('readable', function() {
                    const content = req.read();

                    if (content) {
                        body += content;
                    }

                    if (body.length > 1e4) {
                        res.statusCode = 413;
                        res.end('Your message is too big');
                    }
                })
                .on('end', function() {
                    try {
                        body = JSON.parse(body);
                    } catch(e) {
                        res.statusCode = 400;
                        res.end('bad request');
                        return;
                    }

                    chat.publish(body.message);
                    res.end('ok');
                });
            break;
        default:
            res.statusCode = 404;
            res.end('not found');
    }
}).listen(3000);

function sendFile(fileName, res) {
    var fileStream = new fs.ReadStream(fileName);

    fileStream
        .on('error', function() {
            res.statusCode = 500;
            res.end('server error');
        })
        .pipe(res);
}