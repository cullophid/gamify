'use strict';
var _ = require('lodash');
var find = require('./find');

module.exports = function (router) {
  router.get('/games', function (req, res, next) {
      find(req.query)
        .then(function (games) {
          res.send(games);
        })
        .catch(next);
  });
};
