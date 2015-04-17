'use strict';
var _ = require('lodash');
var gamesCollection = require('../../services/mongo').collection('games');
exports.create = function (game) {

  return gamesCollection.insert(polyfillGame(game))
    .then(function (game) {
      return gamesCollection.findOne(_.pick(game, '_id'))
        .then(function (game) {
          console.log(game);
          return game;
        })
    });

    function polyfillGame (game) {
      return _.defaults(game, {
        tasks:[],
        achievements: [],
        description : ""
      });
    }
};
