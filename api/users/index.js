'use strict';
var find = require('./find');
var findOne = require('./findOne');
var completeTask = require('./completeTask');

module.exports = function (router) {
    router.get('/users/:_id', function (req, res, next) {
        console.log(req.params);
        findOne(req.params)
          .then(function (user) {
              return res.send(user);
          })
          .catch(next);
    });

    router.get('/users', function (req, res, next) {
      find(req.query)
        .then(function (users) {
          res.send(users);
        })
        .catch(next);
    });

    router.post('/users/:_id/completeTask', function (req, res, next) {
      completeTask(req.params, req.body)
        .then(function (user) {
            return res.send(user);
        })
        .catch(next);
    });
};
