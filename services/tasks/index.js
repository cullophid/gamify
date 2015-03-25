'use strict';

module.exports = function (router) {
    router.get('/tasks', function (req, res, next) {
        res.send(require('./tasks.json')); 
    });
}