'use strict';
var session = require('./index');
var _ = require('lodash')

module.exports = function (router) {
  router.post('/session/auth', function (req, res, next) {
    session.auth(req.body)
      .then(function (user) {
        req.session.user = user;
        return res.send(user);
      })
      .catch(next);
  });
  router.get('/session', function (req, res, next) {
    res.send(_.pick(req.session, 'user'));
  });
};
