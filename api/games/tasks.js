'use strict';
var _ = require('lodash');
var mongo = require('../../services/mongo');
var gamesCollection = mongo.collection('games');

var prepareForInsert = _.flow(mongo.utils.addId, _.partialRight(mongo.utils.createPushStatement,'tasks'));
exports._prepareForInsert = prepareForInsert;

exports.createTask = function  (game, task) {
  return gamesCollection.update(game, prepareForInsert(task))
    .then(function () {
      return gamesCollection.findOne(game);
    });
};
