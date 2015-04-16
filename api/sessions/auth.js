'use strict'
var _ = require('lodash');
var mongo = require('../../services/mongo');
var usersCollection = mongo.collection('users');

var userTemplate = {
  firstname: "",
  lastname: "",
  tasks: [],
  achievements: []
};

exports.auth = function (user) {
  return usersCollection.findOne(_.pick(user, 'email'))
    .then(function (existingUser) {
      return existingUser || usersCollection.insert(_.defaults(user, userTemplate));
    });
};
