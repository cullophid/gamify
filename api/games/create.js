'use strict';
var _ = require('lodash');
var mongo = require('../../services/mongo');
var objectId = mongo.objectId;
var gamesCollection = mongo.collection('games');
var gameDefaults = {
  tasks:[],
  achievements: [],
  description : "",
  users: []
};

exports.create = function (game) {
  return gamesCollection.insert(prepGameForInsert(game))
    .then(function (game) {
      return gamesCollection.findOne(_.pick(game, '_id'))
        .then(function (game) {
          return game;
        });
    });
};
exports._prepGameForInsert = prepGameForInsert;
function prepGameForInsert (game) {
  return _(game)
    .pick('users')
    .mapValues(function (users) {
      return _.map(users, objectId);
    })
    .defaults(game, gameDefaults)
    .value();
}
