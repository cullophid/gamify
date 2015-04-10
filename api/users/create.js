'use strict';
var _ = require('lodash');
var usersCollection = require('../../services/mongo').collection('users');

var defaults = {
  firstname : "",
  lastname: "",
  tasks: []  
};
module.exports = function (user) {
  return usersCollection.insert(_.defaults(user, defaults));
};
