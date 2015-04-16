var angular = require('angular');

angular.module('login', [])
  .controller('loginPageController', require('./loginPageController'));

module.exports = 'login';
