'use strict';
var _ = require('lodash');
var objectId = require('promised-mongo').ObjectId;
var Promise = require('bluebird');
var usersCollection = require('../../services/mongo').collection('users');

module.exports = function (query) {
  return Promise.resolve(query)
    .then(function (query) {
      return {
        _id : objectId(query._id)
      };
    }).then(function (query) {
      console.log(query);
      return query;
    })
    .then(function (query) {
      return usersCollection.findOne(query);
    });
};
