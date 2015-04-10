'use strict';
var users = require('./index');
var middleware = require('./middleware');

module.exports = function (router) {
    router.get('/users/:_id', [middleware.processParams], function (req, res, next) {
        console.log(req.params);
        users.findOne(req.params)
          .then(function (user) {
              return res.send(user);
          })
          .catch(next);
    });

    router.get('/users', function (req, res, next) {
      users.find(req.query)
        .then(function (users) {
          res.send(users);
        })
        .catch(next);
    });
    
    router.post('/users', function (req, res, next) {
      users.create(req.body)
        .then(function (user) {
          res.status(201).send(user);
        });
    });

    router.post('/users/:_id/completeTask', [middleware.processParams], function (req, res, next) {
      users.completeTask(req.params, req.body)
        .then(function (user) {
            return res.send(user);
        })
        .catch(next);
    });
};
