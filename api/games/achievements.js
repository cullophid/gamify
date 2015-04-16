'use strict';
var _ = require('lodash');
var mongo = require('../../services/mongo');
var gamesCollection = mongo.collection('games');

var prepareForInsert = _.flow(
  mongo.utils.addId,
  _.partialRight(mongo.utils.convertToObjectId, 'task'), _.partialRight(mongo.utils.createPushStatement,'achievements'));

exports.createAchievement = function  (game, achievement) {
  return gamesCollection.update(game, prepareForInsert(achievement))
    .then(function () {
      return gamesCollection.findOne(game);
    });
};
