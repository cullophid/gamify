'use strict';
var _ = require('lodash');
var mongo = require('../../services/mongo');
var gamesCollection = mongo.collection('games');

var processTaskForInsert = _.flow(mongo.utils.addId, _.partialRight(mongo.utils.createPushStatement,'tasks'));

exports.createTask = function  (game, task) {
  return gamesCollection.update(game, processTaskForInsert(task))
    .then(function () {
      return gamesCollection.findOne(game);
    });
};

