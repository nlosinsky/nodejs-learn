var domain = require('domain');
var serverDomain = domain.create();

serverDomain.on('error', function(err) {
   console.error('Домен перехватил ошибку %s', err);
});

serverDomain.run(function() {
    var server = require('./server');

    server.listen(3000);
});