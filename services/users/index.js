'use strict';

module.exports = function (router) {
    router.get('/users', function (req, res, next) {
        res.send(require('./users.json')); 
    });
    router.get('/users/:id', function (req, res, next) {
        res.send(require('./users.json')[0]); 
    });
}