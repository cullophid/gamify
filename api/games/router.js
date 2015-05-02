'use strict';
import * as games from './index';
import middleware from './middleware';
console.log('GAMES');
console.log(games);

export default function (router) {
  router.post('/games/:_id/tasks', [middleware.processParams], function (req, res, next) {
    games.createTask(req.params, req.body)
      .then(function (game) {
        res.status(201).send(game);
      });
  });
  router.post('/games/:_id/achievements', [middleware.processParams], function (req, res, next) {
    games.createAchievement(req.params, req.body)
      .then(function (game) {
        res.status(201).send(game);
      });
  });

  router.get('/games/:_id', [middleware.processParams], function (req, res, next) {
      games.findOne(req.params)
        .then(function (game) {
          res.send(game);
        })
        .catch(next);
  });


  router.get('/games', [middleware.processQuery], function (req, res, next) {
      games.find(req.query)
        .then(function (games) {
          res.send(games);
        })
        .catch(next);
  });


  router.post('/games', function (req, res, next) {
      games.create(req.body)
        .then(function (game) {
          res.status(201).send(game);
        })
        .catch(next);
  });
};
