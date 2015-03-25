'use strict';
var angular = require('angular');
angular.module('game', [])
    .controller('gameController', require('./controller'))
    .directive('game', require('./directive'));