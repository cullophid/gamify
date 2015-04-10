'use strict';
var _ = require('lodash');
var games = require('./index');
var middleware = require('./middleware');

module.exports = function (router) {
  router.get('/games/:_id', [middleware.processParams], function (req, res, next) {
      games.findOne(req.query)
        .then(function (game) {
          res.send(game);
        })
        .catch(next);
  });
  
  
  router.get('/games', function (req, res, next) {
      games.find(req.query)
        .then(function (games) {
          res.send(games);
        })
        .catch(next);
  });
  
  
  router.post('/games', function (req, res, next) {
      games.create(req.body)
        .then(function (game) {
          res.send(game);
        })
        .catch(next);
  });
};
