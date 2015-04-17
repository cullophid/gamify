var angular = require('angular');

angular.module('session', [])
  .factory('sessionService', require('./sessionService'));

module.exports = 'session';
