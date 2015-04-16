'use strict';
var session = require('./index');

module.exports = function (router) {
  router.post('/session/auth', function (req, res, next) {
    session.auth(req.body)
      .then(function (user) {
        return res.send(user);
      })
      .catch(next);
  });
};
