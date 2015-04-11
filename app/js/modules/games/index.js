'use strict';
var angular = require('angular');

  angular.module('game', [])
    .factory('gameService', require('./gameService'))
    .directive('game', require('./gameDirective'));

module.exports = 'game';
