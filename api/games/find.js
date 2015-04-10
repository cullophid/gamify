'use strict';
var gamesCollection = require('../../services/mongo').collection('games');
module.exports = function (query) {
  return gamesCollection.find(query)
    .toArray();
};
