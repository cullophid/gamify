'use strict';
var _ = require('lodash');
var usersCollection = require('../../services/mongo').collection('users');

exports.find = function (query) {
  return usersCollection.find(query)
    .toArray();
};

exports.findOne = function (query) {
  return usersCollection.findOne(query);
};
