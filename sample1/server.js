var User = require('./user');
var log = require('./logger')(module);

function run() {
    var petya = new User('Petya');
    var vasya = new User('Vasya');

    vasya.hello(petya);
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}