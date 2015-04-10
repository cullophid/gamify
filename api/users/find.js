'use strict';
var _ = require('lodash');
var usersCollection = require('../../services/mongo').collection('users');

module.exports = function (query) {
  return usersCollection.find(query)
    .toArray();
};
