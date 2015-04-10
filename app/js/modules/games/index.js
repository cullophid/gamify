'use strict';
var angular = require('angular');

  angular.module('game', [])
    .controller('gameController', require('./gameController'))
    .factory('gameService', require('./gameService'))
    .directive('game', require('./gameDirective'));

module.exports = 'game';