'use strict';
var angular = require('angular');
  angular.module('users', [])
    .factory('usersService', require('./usersService'))
    .directive('user', require('./userDirective'));
module.exports = 'users';
