'use strict';
var gamesCollection = require('../../services/mongo').collection('games');
exports.find = function (query) {
  return gamesCollection.find(query)
    .toArray();
};

exports.findOne = function  (query) {
  return gamesCollection.findOne(query);
}
