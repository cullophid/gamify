'use strict';
var angular = require('angular');

  angular.module('game', [])
    .factory('gamesService', require('./gamesService'))
    .directive('game', require('./gameDirective'))
    .directive('tasks', require('./tasksDirective'))
    .directive('achievements', require('./achievementsDirective'));

module.exports = 'game';
