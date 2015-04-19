'use strict';
var angular = require('angular');

  angular.module('game', [])
    .controller('gameController', require('./gameController'))
    .controller('gamesListController', require('./gamesListController'))
    .factory('gamesService', require('./gamesService'))
    .directive('tasks', require('./tasksDirective'))
    .directive('achievements', require('./achievementsDirective'));

module.exports = 'game';
