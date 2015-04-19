var angular = require('angular');

angular.module('login', [])
  .controller('loginController', require('./loginController'));

module.exports = 'login';
