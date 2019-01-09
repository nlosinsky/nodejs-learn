var http = require('http');
console.log(process.env);

http.createServer(function(req, res) {
    res.end('running');
}).listen(3000);