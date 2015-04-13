'use strict';
var angular = require('angular');

  angular.module('game', [])
    .factory('gamesService', require('./gamesService'))
    .directive('game', require('./gameDirective'));

module.exports = 'game';
