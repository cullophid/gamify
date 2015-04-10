'use strict';
var gamesCollection = require('../../services/mongo').collection('games');
exports.create = function (game) {
  return gamesCollection.insert(game);
};
