'use strict';
var _ = require('lodash');
var usersCollection = require('../../services/mongo').collection('users');

exports.findOne = function (query) {
  return usersCollection.findOne(query);
};
