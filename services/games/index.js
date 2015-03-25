'use strict';

module.exports = function (router) {
    router.get('/games', function (req, res, next) {
        res.send(require('./games.json')); 
    });
}