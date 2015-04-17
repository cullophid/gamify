'use strict';
var angular = require('angular');

  angular.module('game', [])
    .controller('gamePageController', require('./gamePageController'))
    .factory('gamesService', require('./gamesService'))
    .directive('tasks', require('./tasksDirective'))
    .directive('achievements', require('./achievementsDirective'));

module.exports = 'game';
