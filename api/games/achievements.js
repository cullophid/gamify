'use strict';
var _ = require('lodash');
var mongo = require('../../services/mongo');
var gamesCollection = mongo.collection('games');

var prepareForInsert = _.flow(
  mongo.utils.addId,
  _.partialRight(mongo.utils.convertPropertiesToObjectId, 'task'), _.partialRight(mongo.utils.createPushStatement,'achievements'));
exports._prepareForInsert = prepareForInsert;

exports.createAchievement = function  (game, achievement) {
  return gamesCollection.update(game, prepareForInsert(achievement))
    .then(function () {
      return gamesCollection.findOne(game);
    });
};
