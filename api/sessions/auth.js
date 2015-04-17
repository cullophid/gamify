'use strict';
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
  return usersCollection.findOne(_.pick(prepUser(user), 'email'))
    .then(function (existingUser) {
      return existingUser || usersCollection.insert(_.defaults(prepUser(user), userTemplate));
    });
};

function prepUser (user) {
  return _(user)
    .pick('email')
    .mapValues(_.method('toLowerCase'))
    .tap(console.log)
    .defaults(user)
    .value();
}


exports._prepUser = prepUser;
