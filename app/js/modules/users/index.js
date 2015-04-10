'use strict';
var angular = require('angular');
  angular.module('users', [])
    .factory('usersService', require('./usersService'));
module.exports = 'users';