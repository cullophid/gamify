'use strict';
var session = require('./index');
var _ = require('lodash')

module.exports = function (router) {
  router.post('/session/auth', function (req, res, next) {
    session.auth(req.body)
      .then(function (user) {
        req.session.userId = user._id;
        return res.send({user: user});
      })
      .catch(next);
  });
  router.get('/session', function (req, res, next) {
    session.getUser({_id : req.session.userId})
      .then(function (user) {
        res.send({user: user});
      });
  });
};
